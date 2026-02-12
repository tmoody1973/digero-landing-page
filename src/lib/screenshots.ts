export const screenshots = {
  hero: {
    recipeDetail: "/organized/hero/recipe-detail-top.png",
    recipeList: "/organized/hero/recipe-list-view.png",
  },
  saveFromAnywhere: {
    addRecipeModal: "/organized/save-from-anywhere/add-recipe-modal.png",
    iosShareSheet: "/organized/save-from-anywhere/ios-share-sheet.png",
    manualForm: "/organized/save-from-anywhere/manual-recipe-form.png",
  },
  cookbookScanning: {
    scanStart: "/organized/cookbook-scanning/scan-cookbook-start.png",
  },
  youtubeDiscovery: {
    searchResults: "/organized/youtube-discovery/youtube-search-results.png",
  },
  aiSousChef: {
    suggestionCard: "/organized/ai-sous-chef/ai-recipe-suggestion-card.png",
    conversationTips: "/organized/ai-sous-chef/ai-conversation-tips.png",
  },
  recipes: {
    ingredientsNutrition:
      "/organized/recipes/recipe-detail-ingredients-nutrition.png",
    instacartOrder: "/organized/recipes/instacart-order-ingredients.png",
  },
  mealPlanning: {
    weeklyCalendar: "/organized/meal-planning/weekly-meal-calendar.png",
  },
  shoppingLists: {
    byAisle: "/organized/shopping-lists/shopping-list-by-aisle.png",
    overview: "/organized/shopping-lists/shopping-lists-overview.png",
  },
  cookbooks: {
    gridView: "/organized/cookbooks/cookbooks-grid-view.png",
    valentinesDetail: "/organized/cookbooks/cookbook-detail-valentines.png",
    newForm: "/organized/cookbooks/new-cookbook-form.png",
  },
  creatorEconomy: {
    dashboardOverview:
      "/organized/creator-economy/creator-dashboard-overview.png",
    earnings: "/organized/creator-economy/creator-dashboard-earnings.png",
    analytics: "/organized/creator-economy/creator-dashboard-analytics.png",
    profileVideos: "/organized/creator-economy/creator-profile-videos.png",
    profileExclusive:
      "/organized/creator-economy/creator-profile-exclusive-recipes.png",
    shop: "/organized/creator-economy/creator-dashboard-shop.png",
    addProduct: "/organized/creator-economy/creator-dashboard-add-product.png",
    settings: "/organized/creator-economy/creator-dashboard-settings.png",
  },
  pricingSettings: {
    paywall: "/organized/pricing-settings/paywall-plus-annual.png",
    settingsScreen: "/organized/pricing-settings/settings-screen.png",
  },
  discover: {
    creatorSpotlight: "/organized/discover/channels-creator-spotlight.png",
    followingChannels: "/organized/discover/following-channels-list.png",
    videoFeed: "/organized/discover/video-feed-list.png",
  },
} as const;

export const allScreenshots = [
  { src: screenshots.hero.recipeDetail, alt: "Recipe detail view" },
  { src: screenshots.hero.recipeList, alt: "Recipe list view" },
  {
    src: screenshots.saveFromAnywhere.addRecipeModal,
    alt: "Add recipe modal",
  },
  {
    src: screenshots.saveFromAnywhere.iosShareSheet,
    alt: "iOS share sheet",
  },
  { src: screenshots.saveFromAnywhere.manualForm, alt: "Manual recipe form" },
  { src: screenshots.cookbookScanning.scanStart, alt: "Scan cookbook" },
  {
    src: screenshots.youtubeDiscovery.searchResults,
    alt: "YouTube search results",
  },
  {
    src: screenshots.aiSousChef.suggestionCard,
    alt: "AI recipe suggestion",
  },
  {
    src: screenshots.aiSousChef.conversationTips,
    alt: "AI cooking tips chat",
  },
  {
    src: screenshots.recipes.ingredientsNutrition,
    alt: "Recipe ingredients and nutrition",
  },
  {
    src: screenshots.recipes.instacartOrder,
    alt: "Instacart ingredient ordering",
  },
  {
    src: screenshots.mealPlanning.weeklyCalendar,
    alt: "Weekly meal planner",
  },
  {
    src: screenshots.shoppingLists.byAisle,
    alt: "Shopping list by aisle",
  },
  {
    src: screenshots.shoppingLists.overview,
    alt: "Shopping lists overview",
  },
  { src: screenshots.cookbooks.gridView, alt: "Cookbooks collection" },
  {
    src: screenshots.cookbooks.valentinesDetail,
    alt: "Cookbook detail view",
  },
  { src: screenshots.cookbooks.newForm, alt: "New cookbook form" },
  {
    src: screenshots.creatorEconomy.dashboardOverview,
    alt: "Creator dashboard",
  },
  {
    src: screenshots.creatorEconomy.earnings,
    alt: "Creator earnings",
  },
  {
    src: screenshots.creatorEconomy.analytics,
    alt: "Creator analytics",
  },
  {
    src: screenshots.creatorEconomy.profileVideos,
    alt: "Creator profile videos",
  },
  {
    src: screenshots.creatorEconomy.profileExclusive,
    alt: "Exclusive creator recipes",
  },
  { src: screenshots.creatorEconomy.shop, alt: "Creator shop" },
  {
    src: screenshots.creatorEconomy.addProduct,
    alt: "Add product form",
  },
  {
    src: screenshots.creatorEconomy.settings,
    alt: "Creator settings",
  },
  {
    src: screenshots.pricingSettings.paywall,
    alt: "Subscription paywall",
  },
  {
    src: screenshots.pricingSettings.settingsScreen,
    alt: "Settings screen",
  },
  {
    src: screenshots.discover.creatorSpotlight,
    alt: "Creator spotlight",
  },
  {
    src: screenshots.discover.followingChannels,
    alt: "Following channels",
  },
  { src: screenshots.discover.videoFeed, alt: "Video feed" },
];
