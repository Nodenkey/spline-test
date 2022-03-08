const splineModule = `
	<body>
			<canvas id="canvas3d"/>		
		<script type="module">
			import { Application } from './runtime.js';
			const canvas = document.getElementById('canvas3d');
			const app = new Application(canvas);
			app.load('./scene.spline');
		</script>
	</body>
`

export const splineModuleCreator = () => {
    return {__html: splineModule}
}