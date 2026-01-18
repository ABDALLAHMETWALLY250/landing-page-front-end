
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

interface _GlobalComponents {
  'CardsOurProductCard': typeof import("../../app/components/Cards/OurProductCard.vue").default
  'CardsOurShopsCard': typeof import("../../app/components/Cards/OurShopsCard.vue").default
  'HomeBrands': typeof import("../../app/components/Home/Brands.vue").default
  'HomeHeroSectionImagesSwiper': typeof import("../../app/components/Home/HeroSection/ImagesSwiper.vue").default
  'HomeHeroSection': typeof import("../../app/components/Home/HeroSection/index.vue").default
  'HomeOurProductsHeader': typeof import("../../app/components/Home/OurProducts/Header.vue").default
  'HomeOurProductsTabs': typeof import("../../app/components/Home/OurProducts/Tabs.vue").default
  'HomeOurProducts': typeof import("../../app/components/Home/OurProducts/index.vue").default
  'HomeOurShop': typeof import("../../app/components/Home/OurShop/Index.vue").default
  'IconsAr': typeof import("../../app/components/Icons/Ar.vue").default
  'IconsArrowDown': typeof import("../../app/components/Icons/ArrowDown.vue").default
  'IconsArrowNext': typeof import("../../app/components/Icons/ArrowNext.vue").default
  'IconsArrowPrev': typeof import("../../app/components/Icons/ArrowPrev.vue").default
  'IconsCart': typeof import("../../app/components/Icons/Cart.vue").default
  'IconsCoffeBit': typeof import("../../app/components/Icons/CoffeBit.vue").default
  'IconsCoffieBitOpacity': typeof import("../../app/components/Icons/CoffieBitOpacity.vue").default
  'IconsEn': typeof import("../../app/components/Icons/En.vue").default
  'IconsFacebook': typeof import("../../app/components/Icons/Facebook.vue").default
  'IconsInsta': typeof import("../../app/components/Icons/Insta.vue").default
  'IconsLinkedIn': typeof import("../../app/components/Icons/LinkedIn.vue").default
  'IconsStar': typeof import("../../app/components/Icons/Star.vue").default
  'LayoutChangeLanguage': typeof import("../../app/components/Layout/ChangeLanguage.vue").default
  'LayoutFooterCafeLocation': typeof import("../../app/components/Layout/Footer/CafeLocation.vue").default
  'LayoutFooterContact': typeof import("../../app/components/Layout/Footer/Contact.vue").default
  'LayoutFooter': typeof import("../../app/components/Layout/Footer/Index.vue").default
  'LayoutFooterMenuLinks': typeof import("../../app/components/Layout/Footer/MenuLinks.vue").default
  'LayoutFooterSocialLinks': typeof import("../../app/components/Layout/Footer/SocialLinks.vue").default
  'LayoutNavbar': typeof import("../../app/components/Layout/Navbar.vue").default
  'ProductsDetailsImageGallery': typeof import("../../app/components/Products/Details/ImageGallery.vue").default
  'ProductsDetailsInfo': typeof import("../../app/components/Products/Details/Info.vue").default
  'ProductsDetailsReviews': typeof import("../../app/components/Products/Details/Reviews.vue").default
  'NuxtMarquee': typeof import("../../node_modules/nuxt-marquee/dist/runtime/components/NuxtMarquee.vue").default
  'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue").default
  'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout").default
  'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
  'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only").default
  'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only").default
  'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder").default
  'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link").default
  'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
  'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default
  'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
  'NuxtImg': typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue").default
  'NuxtPicture': typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue").default
  'NuxtLinkLocale': typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale").default
  'SwitchLocalePathLink': typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink").default
  'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page").default
  'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components").NoScript
  'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Link
  'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Base
  'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Title
  'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Meta
  'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Style
  'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Head
  'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Html
  'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Body
  'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island").default
  'LazyCardsOurProductCard': LazyComponent<typeof import("../../app/components/Cards/OurProductCard.vue").default>
  'LazyCardsOurShopsCard': LazyComponent<typeof import("../../app/components/Cards/OurShopsCard.vue").default>
  'LazyHomeBrands': LazyComponent<typeof import("../../app/components/Home/Brands.vue").default>
  'LazyHomeHeroSectionImagesSwiper': LazyComponent<typeof import("../../app/components/Home/HeroSection/ImagesSwiper.vue").default>
  'LazyHomeHeroSection': LazyComponent<typeof import("../../app/components/Home/HeroSection/index.vue").default>
  'LazyHomeOurProductsHeader': LazyComponent<typeof import("../../app/components/Home/OurProducts/Header.vue").default>
  'LazyHomeOurProductsTabs': LazyComponent<typeof import("../../app/components/Home/OurProducts/Tabs.vue").default>
  'LazyHomeOurProducts': LazyComponent<typeof import("../../app/components/Home/OurProducts/index.vue").default>
  'LazyHomeOurShop': LazyComponent<typeof import("../../app/components/Home/OurShop/Index.vue").default>
  'LazyIconsAr': LazyComponent<typeof import("../../app/components/Icons/Ar.vue").default>
  'LazyIconsArrowDown': LazyComponent<typeof import("../../app/components/Icons/ArrowDown.vue").default>
  'LazyIconsArrowNext': LazyComponent<typeof import("../../app/components/Icons/ArrowNext.vue").default>
  'LazyIconsArrowPrev': LazyComponent<typeof import("../../app/components/Icons/ArrowPrev.vue").default>
  'LazyIconsCart': LazyComponent<typeof import("../../app/components/Icons/Cart.vue").default>
  'LazyIconsCoffeBit': LazyComponent<typeof import("../../app/components/Icons/CoffeBit.vue").default>
  'LazyIconsCoffieBitOpacity': LazyComponent<typeof import("../../app/components/Icons/CoffieBitOpacity.vue").default>
  'LazyIconsEn': LazyComponent<typeof import("../../app/components/Icons/En.vue").default>
  'LazyIconsFacebook': LazyComponent<typeof import("../../app/components/Icons/Facebook.vue").default>
  'LazyIconsInsta': LazyComponent<typeof import("../../app/components/Icons/Insta.vue").default>
  'LazyIconsLinkedIn': LazyComponent<typeof import("../../app/components/Icons/LinkedIn.vue").default>
  'LazyIconsStar': LazyComponent<typeof import("../../app/components/Icons/Star.vue").default>
  'LazyLayoutChangeLanguage': LazyComponent<typeof import("../../app/components/Layout/ChangeLanguage.vue").default>
  'LazyLayoutFooterCafeLocation': LazyComponent<typeof import("../../app/components/Layout/Footer/CafeLocation.vue").default>
  'LazyLayoutFooterContact': LazyComponent<typeof import("../../app/components/Layout/Footer/Contact.vue").default>
  'LazyLayoutFooter': LazyComponent<typeof import("../../app/components/Layout/Footer/Index.vue").default>
  'LazyLayoutFooterMenuLinks': LazyComponent<typeof import("../../app/components/Layout/Footer/MenuLinks.vue").default>
  'LazyLayoutFooterSocialLinks': LazyComponent<typeof import("../../app/components/Layout/Footer/SocialLinks.vue").default>
  'LazyLayoutNavbar': LazyComponent<typeof import("../../app/components/Layout/Navbar.vue").default>
  'LazyProductsDetailsImageGallery': LazyComponent<typeof import("../../app/components/Products/Details/ImageGallery.vue").default>
  'LazyProductsDetailsInfo': LazyComponent<typeof import("../../app/components/Products/Details/Info.vue").default>
  'LazyProductsDetailsReviews': LazyComponent<typeof import("../../app/components/Products/Details/Reviews.vue").default>
  'LazyNuxtMarquee': LazyComponent<typeof import("../../node_modules/nuxt-marquee/dist/runtime/components/NuxtMarquee.vue").default>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue").default>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout").default>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only").default>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only").default>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder").default>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link").default>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue").default>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue").default>
  'LazyNuxtLinkLocale': LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale").default>
  'LazySwitchLocalePathLink': LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink").default>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page").default>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").NoScript>
  'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Link>
  'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Base>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Title>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Meta>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Style>
  'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Head>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Html>
  'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Body>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island").default>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
