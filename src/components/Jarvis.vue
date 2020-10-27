<template>
    <div class="jarvis">
      <div id="container"></div>
    </div>
</template>
 
<script>
import * as Three from 'three'
import { SVGRenderer } from 'three/examples/jsm/renderers/SVGRenderer'
export default {
  name: 'Jarvis',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
    }
  },
  methods: {
    init() {
        let container = document.getElementById('container');
 
        this.camera = new Three.PerspectiveCamera(33, container.clientWidth / container.clientHeight, 0.1, 100);
        this.camera.position.z = 10;
 
        this.scene = new Three.Scene();
        this.scene.background = new Three.Color( 0, 0, 0 );

        this.renderer = new SVGRenderer();
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);
 
        var vertices = [];
				var divisions = 50;

				for ( var i = 0; i <= divisions; i ++ ) {

					var v = ( i / divisions ) * ( Math.PI * 2 );

					var x = Math.sin( v );
					var z = Math.cos( v );

					vertices.push( x, 0, z );

				}

				var geometry = new Three.BufferGeometry();
				geometry.setAttribute( 'position', new Three.Float32BufferAttribute( vertices, 3 ) );

				//

				for ( var i = 1; i <= 2; i ++ ) {

					var material = new Three.LineBasicMaterial( {
						color: 0x3cd1e3,
						linewidth: 4
					} );
					var line = new Three.Line( geometry, material );
					line.scale.setScalar( i / 2 );
					this.scene.add( line );

        }
        var material = new Three.LineBasicMaterial( {
						color: 0x087fc9,
						linewidth: 12
					} );
					var line = new Three.Line( geometry, material );
					line.scale.setScalar( 5/8 );
					this.scene.add( line );

				var material = new Three.LineDashedMaterial( {
					color: 0x3cd1e3,
					linewidth: 2,
					dashSize: 10,
					gapSize: 10
				} );
				var line = new Three.Line( geometry, material );
				line.scale.setScalar( 6/7 );
				this.scene.add( line );

				//

				window.addEventListener( 'resize', this.onWindowResize(), false );
    },
    onWindowResize() {
        let container = document.getElementById('container');
				this.camera.aspect = container.clientWidth / container.clientHeight;
				this.camera.updateProjectionMatrix();

				this.renderer.setSize( container.clientWidth, container.clientHeight );

			},
    animate() {
        let count = 0;
        let time = performance.now() / 1000;
        this.scene.traverse( function ( child ) {

					child.rotation.x = count + ( time / 5 );
					child.rotation.z = count + ( time / 5 );

					count ++;

        } );
        this.renderer.render( this.scene, this.camera );
				requestAnimationFrame( this.animate );
    }
  },
  mounted() {
      this.init();
      this.animate()
  }
}
</script>
<style scoped>
  #container {
    height: 900px;
  }
</style>