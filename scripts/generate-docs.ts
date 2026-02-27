/**
 * scripts/generate-docs.ts
 *
 * Script standalone che genera tutti i .md di documentazione in docs/.
 * Va eseguito prima di `pnpm docs:dev` o `pnpm docs:build` per avere
 * la sidebar già popolata al primo avvio.
 *
 * Utilizzo:  pnpm docs:generate
 */
import { generateDocs } from './docs-plugin.js'

generateDocs()
