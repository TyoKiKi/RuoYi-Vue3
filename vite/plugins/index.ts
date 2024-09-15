import vue from '@vitejs/plugin-vue'
import type { Plugin } from 'vite'

// Import functions with inferred or defined types
import createAutoImport from './auto-import'
import createSvgIcon from './svg-iocn'
import createCompression from './compression'
import createSetupExtend from './setup-extend'

// Define types for the function parameters
interface ViteEnv {
  // Define the properties of ViteEnv if known
  [key: string]: any
}

export default function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean = false): Plugin[] {
  // Initialize the Vite plugins array
  const vitePlugins: Plugin[] = [vue()]

  // Add plugins to the array
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createSetupExtend())
  vitePlugins.push(createSvgIcon(isBuild))

  // Conditionally add compression plugin if isBuild is true
  if (isBuild) {
    vitePlugins.push(...createCompression(viteEnv))
  }

  return vitePlugins
}
