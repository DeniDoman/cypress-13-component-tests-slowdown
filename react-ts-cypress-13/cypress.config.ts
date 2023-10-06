import {defineConfig} from "cypress";

export default defineConfig({
    component: {
        setupNodeEvents(on, config) {
        },
        video: false,
        specPattern: "src/**/*.spec.ct.{js,ts,jsx,tsx}",
        devServer: {
            framework: "create-react-app",
            bundler: "webpack",
        },
        experimentalSingleTabRunMode: true
    },
});
