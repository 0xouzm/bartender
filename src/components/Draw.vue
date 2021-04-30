<template>
  <div class="container">
    <svg
      viewBox="0 0 1418 116"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <title>@WebDesignerMag</title>
      <g stroke="none" fill="none" fill-rule="evenodd" fill-opacity="0">
        <text
          id="@WebDesignerMag"
          stroke="#fff"
          fill="#645F5A"
          font-weight="normal"
          font-family="PermanentMarker-Regular, Permanent Marker"
          font-size="144"
        >
          <tspan x="3" y="109">
            <!--
					-->
            <tspan>@</tspan>
            <!--
					-->
            <tspan>B</tspan>
            <!--
					-->
            <tspan>a</tspan>
            <!--
					-->
            <tspan>r</tspan>
            <!--
					-->
            <tspan>T</tspan>
            <!--
					-->
            <tspan>e</tspan>
            <!--
					-->
            <tspan>n</tspan>
            <!--
					-->
            <tspan>d</tspan>
            <!--
					-->
            <tspan>e</tspan>
            <!--
					-->
            <tspan>r</tspan>
            <!--
				-->
          </tspan>
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Draw',
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');

.container {
  background-color: #232323;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  svg {
    max-width: 45rem;
    width: 100%;
    height: auto;
    fill: none;
    stroke: white;
    stroke-width: 4;

    tspan > tspan {
      stroke-dasharray: 1500;
      stroke-dashoffset: -1500;

      @for $i from 1 through 15 {
        &:nth-of-type(#{$i}) {
          animation: draw 300ms #{$i * 150}ms forwards;
        }
      }
    }
  }
}

@keyframes draw {
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
