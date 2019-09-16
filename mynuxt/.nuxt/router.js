import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _e0c072ec = () => interopDefault(import('..\\pages\\lol\\index.vue' /* webpackChunkName: "pages_lol_index" */))
const _41c1824f = () => interopDefault(import('..\\pages\\note\\index.vue' /* webpackChunkName: "pages_note_index" */))
const _1510dce4 = () => interopDefault(import('..\\pages\\story.vue' /* webpackChunkName: "pages_story" */))
const _5b4ab6ce = () => interopDefault(import('..\\pages\\write.vue' /* webpackChunkName: "pages_write" */))
const _28de5007 = () => interopDefault(import('..\\pages\\demo\\dropdown-menu.vue' /* webpackChunkName: "pages_demo_dropdown-menu" */))
const _6c4c2144 = () => interopDefault(import('..\\pages\\demo\\mouse-event.vue' /* webpackChunkName: "pages_demo_mouse-event" */))
const _ef8d8400 = () => interopDefault(import('..\\pages\\demo\\stacking-context.vue' /* webpackChunkName: "pages_demo_stacking-context" */))
const _08d6bb57 = () => interopDefault(import('..\\pages\\lol\\ob\\index.vue' /* webpackChunkName: "pages_lol_ob_index" */))
const _5884fc42 = () => interopDefault(import('..\\pages\\note\\css\\index.vue' /* webpackChunkName: "pages_note_css_index" */))
const _7efbd641 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/lol",
      component: _e0c072ec,
      name: "lol"
    }, {
      path: "/note",
      component: _41c1824f,
      name: "note"
    }, {
      path: "/story",
      component: _1510dce4,
      name: "story"
    }, {
      path: "/write",
      component: _5b4ab6ce,
      name: "write"
    }, {
      path: "/demo/dropdown-menu",
      component: _28de5007,
      name: "demo-dropdown-menu"
    }, {
      path: "/demo/mouse-event",
      component: _6c4c2144,
      name: "demo-mouse-event"
    }, {
      path: "/demo/stacking-context",
      component: _ef8d8400,
      name: "demo-stacking-context"
    }, {
      path: "/lol/ob",
      component: _08d6bb57,
      name: "lol-ob"
    }, {
      path: "/note/css",
      component: _5884fc42,
      name: "note-css"
    }, {
      path: "/",
      component: _7efbd641,
      name: "index"
    }],

    fallback: false
  })
}
