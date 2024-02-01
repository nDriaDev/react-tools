import { RouteObject, RouterProvider, createHashRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ComponentLayout from '../layout/ComponentLayout';
import HomeWrapper from '../pages/home/HomeWrapper';
import { COMPONENTS } from '../constants/components';
import { useEffect, useState } from 'react';

const createRoutes = async () => {
	const routes = [];
	const routesFlat = [...COMPONENTS[0].flat(), ...COMPONENTS[1]];
	for (let i = 0, size = routesFlat.length; i < size; i++) {
		const nameComponet = routesFlat[i].charAt(0).toUpperCase() + routesFlat[i].substring(1);
		let Component, Markdown;
		try {
			Component = (await import(`../pages/hooks/${routesFlat[i]}/${nameComponet}.tsx`))[nameComponet];
		} catch (error) {
			Component = undefined
		}
		try {
			const url = (await import(`../markdown/${routesFlat[i]}.md?url`)).default;
			Markdown = await (await fetch(url)).text();
		} catch (error) {
			Markdown = undefined;
		}
		routes.push({
			path: "/" + routesFlat[i],
			element: <ComponentLayout
				{...(Component && { component: <Component /> })}
				markdown={Markdown}
			/>
		})
	}
	return [
		{
			index: true,
			element: <HomeWrapper />
		},
		...routes
	]
};
function Router() {
	const [routes, setRoutes] = useState<Array<RouteObject>>();

	useEffect(() => {
		let mounted = true
		createRoutes()
			.then(res => mounted && setRoutes(res))

		return () => {
			mounted = false
		}
	}, []);

	if (!routes) {
		return null;
	}

	const router = createHashRouter([
		{
			path: "/",
			element: <MainLayout />,
			children: routes
		}
	]);

    return (
        <RouterProvider router= { router } />
	);
}



export default Router
