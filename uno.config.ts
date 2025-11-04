import { defineConfig, presetWind3 } from 'unocss';

export default defineConfig({
	presets: [presetWind3()],
	safelist: ['delay-0', 'delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500']
});
