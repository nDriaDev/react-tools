import { Navigate, useSearchParams } from "react-router-dom";
import Home from "./Home";

export default function HomeWrapper() {
	const [searchParams] = useSearchParams();

	if (searchParams.has("route")) {
		return <Navigate to={`/${searchParams.get("route")}`} replace/>
	}

	return <Home/>
}