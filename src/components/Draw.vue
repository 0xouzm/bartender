<template>
  <div class="container">
    <div>
      <svg
        viewBox="0 0 1418 116"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
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
              <tspan>W</tspan>
              <!--
					-->
              <tspan>H</tspan>
              <!--
					-->
              <tspan>A</tspan>
              <!--
					-->
              <tspan>T</tspan>
              <!--
					-->
              <tspan>&nbsp;</tspan>
              <tspan>S</tspan>
              <!--
					-->
              <tspan>H</tspan>
              <!--
					-->
              <tspan>O</tspan>
              <!--
					-->
              <tspan>U</tspan>
              <!--
					-->
              <tspan>L</tspan>
              <!--
					-->
              <tspan>D</tspan>
              <!--
				-->
            </tspan>
          </text>
        </g>
      </svg>
    </div>
    <!--    bubbles  -->
    <div>
      <router-link :to="{ path: '/entry' }" class="link">NEXT</router-link>
    </div>

    <div class="bubbles-container">
      <svg
        class="bubbles"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 701 1024"
        style="overflow: visible"
      >
        <g class="bubbles-large" stroke-width="7">
          <g>
            <g transform="translate(10 940)">
              <circle cx="35" cy="35" r="35" />
            </g>
          </g>
          <g>
            <g transform="translate(373 940)">
              <circle cx="35" cy="35" r="35" />
            </g>
          </g>
          <g>
            <g transform="translate(408 940)">
              <circle cx="35" cy="35" r="35" />
            </g>
          </g>
          <g>
            <g transform="translate(621 940)">
              <circle cx="35" cy="35" r="35" />
            </g>
          </g>
          <g>
            <g transform="translate(179 940)">
              <circle cx="35" cy="35" r="35" />
            </g>
          </g>
        </g>

        <g class="bubbles-small" stroke-width="4">
          <g>
            <g transform="translate(147 984)">
              <circle cx="15" cy="15" r="15" />
            </g>
          </g>
          <g>
            <g transform="translate(255 984)">
              <circle cx="15" cy="15" r="15" />
            </g>
          </g>
          <g>
            <g transform="translate(573 984)">
              <circle cx="15" cy="15" r="15" />
            </g>
          </g>
          <g>
            <g transform="translate(429 984)">
              <circle cx="15" cy="15" r="15" />
            </g>
          </g>
          <g>
            <g transform="translate(91 984)">
              <circle cx="15" cy="15" r="15" />
            </g>
          </g>
          <g>
            <g transform="translate(640 984)">
              <circle cx="15" cy="15" r="15" />
            </g>
          </g>
          <g>
            <g transform="translate(321 984)">
              <circle cx="15" cy="15" r="15" />
            </g>
          </g>
          <g>
            <g transform="translate(376 984)">
              <circle cx="15" cy="15" r="15" />
            </g>
          </g>
          <g>
            <g transform="translate(376 984)">
              <circle cx="15" cy="15" r="15" />
            </g>
          </g>
          <g>
            <g transform="translate(497 984)">
              <circle cx="15" cy="15" r="15" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Draw',
}
</script>

<style scoped lang="scss">
// text
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');

.container {
  background-color: #232323;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;

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

// bubble start

.bubbles-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  max-width: 15rem;
  transform: translateX(-50%);
  opacity: 0.75;
  overflow: visible;
}

.bubbles {
  width: 100%;
  height: auto;

  circle {
    stroke: white;
    fill: none;
  }

  > g > g:nth-of-type(3n) circle {
    stroke: #87f5fb;
  }

  > g > g:nth-of-type(4n) circle {
    stroke: #8be8cb;
  }
}

.bubbles-large {
  overflow: visible;

  > g {
    transform: translateY(2048px);
    opacity: 0;
    will-change: transform, opacity;
  }

  g:nth-of-type(1) {
    animation: up 6.5s infinite;

    g {
      transform: translateX(350px);
    }

    circle {
      animation: wobble 3s infinite ease-in-out;
    }
  }

  g:nth-of-type(2) {
    animation: up 5.25s 250ms infinite;

    g {
      transform: translateX(450px);
    }

    circle {
      animation: wobble 3s infinite ease-in-out;
    }
  }

  g:nth-of-type(3) {
    animation: up 6s 750ms infinite;

    g {
      transform: translateX(700px);
    }

    circle {
      animation: wobble 3s infinite ease-in-out;
    }
  }

  g:nth-of-type(4) {
    animation: up 5.5s 1.5s infinite;

    g {
      transform: translateX(500px);
    }

    circle {
      animation: wobble 3s infinite ease-in-out;
    }
  }

  g:nth-of-type(5) {
    animation: up 6.5s 4s infinite;

    g {
      transform: translateX(675px);
    }

    circle {
      animation: wobble 3s infinite ease-in-out;
    }
  }
}

.bubbles-small {
  overflow: visible;

  > g {
    transform: translateY(2048px);
    opacity: 0;
    will-change: transform, opacity;
  }

  g circle {
    transform: scale(0);
  }

  g:nth-of-type(1) {
    animation: up 5.25s infinite;

    g {
      transform: translateX(350px);
    }

    circle {
      animation: wobble 3s infinite ease-in-out;
    }
  }

  g:nth-of-type(2) {
    animation: up 5.75s infinite;

    g {
      transform: translateX(750px);
    }

    circle {
      animation: wobble 3s infinite ease-in-out;
    }
  }

  g:nth-of-type(3) {
    animation: up 5.25s 250ms infinite;

    g {
      transform: translateX(350px);
    }

    circle {
      animation: wobble 3s 250ms infinite ease-in-out;
    }
  }

  g:nth-of-type(4) {
    animation: up 5.75s 325ms infinite;

    g {
      transform: translateX(180px);
    }

    circle {
      animation: wobble 3s 325ms infinite ease-in-out;
    }
  }

  g:nth-of-type(5) {
    animation: up 6s 125ms infinite;

    g {
      transform: translateX(350px);
    }

    circle {
      animation: wobble 3s 250ms infinite ease-in-out;
    }
  }

  g:nth-of-type(6) {
    animation: up 5.13s 250ms infinite;

    g {
      transform: translateX(650px);
    }

    circle {
      animation: wobble 3s 125ms infinite ease-in-out;
    }
  }

  g:nth-of-type(7) {
    animation: up 6.25s 350ms infinite;

    g {
      transform: translateX(480px);
    }

    circle {
      animation: wobble 3s 325ms infinite ease-in-out;
    }
  }

  g:nth-of-type(8) {
    animation: up 7s 200ms infinite;

    g {
      transform: translateX(330px);
    }

    circle {
      animation: wobble 3s 325ms infinite ease-in-out;
    }
  }

  g:nth-of-type(9) {
    animation: up 6.25s 233ms infinite;

    g {
      transform: translateX(230px);
    }

    circle {
      animation: wobble 3s 275ms infinite ease-in-out;
    }
  }

  g:nth-of-type(10) {
    animation: up 6s 900ms infinite;

    g {
      transform: translateX(730px);
    }

    circle {
      animation: wobble 2s 905ms infinite ease-in-out;
    }
  }
}

@keyframes wobble {
  33% {
    transform: translateX(-50px);
  }

  66% {
    transform: translateX(50px);
  }
}

@keyframes up {
  0% {
    opacity: 0;
  }

  10%,
  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(-1024px);
  }
}
.link {
  display: block;
  position: absolute;
  bottom: 40px;
  right: 100px;
  font-size: 40px;
  color: white;
}
</style>
