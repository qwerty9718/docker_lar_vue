export default {
    defaultLangApp: 'ru',
    storage_lang_key : `lang_${import.meta.env.VITE_APP_NAME}` , // local storage lang
    app_prefix: import.meta.env.VITE_APP_PREFIX,                 // spa app pref http://127.0.0.1:8000/${project}/main
    api_path: '/api',
    multi_language_api_path: function() {
        const currentLang = localStorage.getItem(this.storage_lang_key) ?? this.defaultLangApp;
        return `/${currentLang}/api`
    }
}