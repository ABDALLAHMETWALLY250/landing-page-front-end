
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const CardsOurProductCard: typeof import("../app/components/Cards/OurProductCard.vue").default
export const CardsOurShopsCard: typeof import("../app/components/Cards/OurShopsCard.vue").default
export const HomeBrands: typeof import("../app/components/Home/Brands.vue").default
export const HomeHeroSectionImagesSwiper: typeof import("../app/components/Home/HeroSection/ImagesSwiper.vue").default
export const HomeHeroSection: typeof import("../app/components/Home/HeroSection/index.vue").default
export const HomeOurProductsHeader: typeof import("../app/components/Home/OurProducts/Header.vue").default
export const HomeOurProductsTabs: typeof import("../app/components/Home/OurProducts/Tabs.vue").default
export const HomeOurProducts: typeof import("../app/components/Home/OurProducts/index.vue").default
export const HomeOurShop: typeof import("../app/components/Home/OurShop/Index.vue").default
export const IconsAr: typeof import("../app/components/Icons/Ar.vue").default
export const IconsArrowDown: typeof import("../app/components/Icons/ArrowDown.vue").default
export const IconsArrowNext: typeof import("../app/components/Icons/ArrowNext.vue").default
export const IconsArrowPrev: typeof import("../app/components/Icons/ArrowPrev.vue").default
export const IconsCart: typeof import("../app/components/Icons/Cart.vue").default
export const IconsCoffeBit: typeof import("../app/components/Icons/CoffeBit.vue").default
export const IconsCoffieBitOpacity: typeof import("../app/components/Icons/CoffieBitOpacity.vue").default
export const IconsEn: typeof import("../app/components/Icons/En.vue").default
export const IconsFacebook: typeof import("../app/components/Icons/Facebook.vue").default
export const IconsInsta: typeof import("../app/components/Icons/Insta.vue").default
export const IconsLinkedIn: typeof import("../app/components/Icons/LinkedIn.vue").default
export const IconsStar: typeof import("../app/components/Icons/Star.vue").default
export const LayoutChangeLanguage: typeof import("../app/components/Layout/ChangeLanguage.vue").default
export const LayoutFooterCafeLocation: typeof import("../app/components/Layout/Footer/CafeLocation.vue").default
export const LayoutFooterContact: typeof import("../app/components/Layout/Footer/Contact.vue").default
export const LayoutFooter: typeof import("../app/components/Layout/Footer/Index.vue").default
export const LayoutFooterMenuLinks: typeof import("../app/components/Layout/Footer/MenuLinks.vue").default
export const LayoutFooterSocialLinks: typeof import("../app/components/Layout/Footer/SocialLinks.vue").default
export const LayoutNavbar: typeof import("../app/components/Layout/Navbar.vue").default
export const ProductsDetailsImageGallery: typeof import("../app/components/Products/Details/ImageGallery.vue").default
export const ProductsDetailsInfo: typeof import("../app/components/Products/Details/Info.vue").default
export const ProductsDetailsReviews: typeof import("../app/components/Products/Details/Reviews.vue").default
export const NuxtMarquee: typeof import("../node_modules/nuxt-marquee/dist/runtime/components/NuxtMarquee.vue").default
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue").default
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout").default
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only").default
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only").default
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder").default
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link").default
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue").default
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue").default
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue").default
export const NuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale").default
export const SwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink").default
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page").default
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components").NoScript
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components").Link
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components").Base
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components").Title
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components").Meta
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components").Style
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components").Head
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components").Html
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components").Body
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island").default
export const LazyCardsOurProductCard: LazyComponent<typeof import("../app/components/Cards/OurProductCard.vue").default>
export const LazyCardsOurShopsCard: LazyComponent<typeof import("../app/components/Cards/OurShopsCard.vue").default>
export const LazyHomeBrands: LazyComponent<typeof import("../app/components/Home/Brands.vue").default>
export const LazyHomeHeroSectionImagesSwiper: LazyComponent<typeof import("../app/components/Home/HeroSection/ImagesSwiper.vue").default>
export const LazyHomeHeroSection: LazyComponent<typeof import("../app/components/Home/HeroSection/index.vue").default>
export const LazyHomeOurProductsHeader: LazyComponent<typeof import("../app/components/Home/OurProducts/Header.vue").default>
export const LazyHomeOurProductsTabs: LazyComponent<typeof import("../app/components/Home/OurProducts/Tabs.vue").default>
export const LazyHomeOurProducts: LazyComponent<typeof import("../app/components/Home/OurProducts/index.vue").default>
export const LazyHomeOurShop: LazyComponent<typeof import("../app/components/Home/OurShop/Index.vue").default>
export const LazyIconsAr: LazyComponent<typeof import("../app/components/Icons/Ar.vue").default>
export const LazyIconsArrowDown: LazyComponent<typeof import("../app/components/Icons/ArrowDown.vue").default>
export const LazyIconsArrowNext: LazyComponent<typeof import("../app/components/Icons/ArrowNext.vue").default>
export const LazyIconsArrowPrev: LazyComponent<typeof import("../app/components/Icons/ArrowPrev.vue").default>
export const LazyIconsCart: LazyComponent<typeof import("../app/components/Icons/Cart.vue").default>
export const LazyIconsCoffeBit: LazyComponent<typeof import("../app/components/Icons/CoffeBit.vue").default>
export const LazyIconsCoffieBitOpacity: LazyComponent<typeof import("../app/components/Icons/CoffieBitOpacity.vue").default>
export const LazyIconsEn: LazyComponent<typeof import("../app/components/Icons/En.vue").default>
export const LazyIconsFacebook: LazyComponent<typeof import("../app/components/Icons/Facebook.vue").default>
export const LazyIconsInsta: LazyComponent<typeof import("../app/components/Icons/Insta.vue").default>
export const LazyIconsLinkedIn: LazyComponent<typeof import("../app/components/Icons/LinkedIn.vue").default>
export const LazyIconsStar: LazyComponent<typeof import("../app/components/Icons/Star.vue").default>
export const LazyLayoutChangeLanguage: LazyComponent<typeof import("../app/components/Layout/ChangeLanguage.vue").default>
export const LazyLayoutFooterCafeLocation: LazyComponent<typeof import("../app/components/Layout/Footer/CafeLocation.vue").default>
export const LazyLayoutFooterContact: LazyComponent<typeof import("../app/components/Layout/Footer/Contact.vue").default>
export const LazyLayoutFooter: LazyComponent<typeof import("../app/components/Layout/Footer/Index.vue").default>
export const LazyLayoutFooterMenuLinks: LazyComponent<typeof import("../app/components/Layout/Footer/MenuLinks.vue").default>
export const LazyLayoutFooterSocialLinks: LazyComponent<typeof import("../app/components/Layout/Footer/SocialLinks.vue").default>
export const LazyLayoutNavbar: LazyComponent<typeof import("../app/components/Layout/Navbar.vue").default>
export const LazyProductsDetailsImageGallery: LazyComponent<typeof import("../app/components/Products/Details/ImageGallery.vue").default>
export const LazyProductsDetailsInfo: LazyComponent<typeof import("../app/components/Products/Details/Info.vue").default>
export const LazyProductsDetailsReviews: LazyComponent<typeof import("../app/components/Products/Details/Reviews.vue").default>
export const LazyNuxtMarquee: LazyComponent<typeof import("../node_modules/nuxt-marquee/dist/runtime/components/NuxtMarquee.vue").default>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue").default>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout").default>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only").default>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only").default>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder").default>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link").default>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue").default>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue").default>
export const LazyNuxtLinkLocale: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale").default>
export const LazySwitchLocalePathLink: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink").default>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page").default>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").NoScript>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Link>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Base>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Title>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Meta>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Style>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Head>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Html>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Body>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island").default>

export const componentNames: string[]
