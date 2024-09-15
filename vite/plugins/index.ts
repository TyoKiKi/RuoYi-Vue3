import vue from '@vitejs/plugin-vue'
import type { Plugin } from 'vite'

// Import functions with inferred or defined types
import createAutoImport from './auto-import'
import createSvgIcon from './svg-icon'
import createCompression from './compression'
// import createSetupExtend from './setup-extend'


export default function createVitePlugins(viteEnv: string, isBuild: boolean = false) {
  // Initialize the Vite plugins array
  const vitePlugins: Plugin[] = [vue()]

  // Add plugins to the array
  vitePlugins.push(createAutoImport())
  // vitePlugins.push(createSetupExtend() as Plugin)
  vitePlugins.push(createSvgIcon(isBuild))

  // Conditionally add compression plugin if isBuild is true
  if (isBuild) {
    vitePlugins.push(...createCompression(viteEnv))
  }

  return vitePlugins
}
