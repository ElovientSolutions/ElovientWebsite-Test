const GoogleAnalyticsTags = () => {

    const trackFormSubmit = (formName = "Website Form") => {
        if (typeof window.gtag !== "function") return;
        window.gtag('event', 'form_submit', {
            event_category: 'Lead',
            event_label: formName,
            value: 1
        });
        console.log("GA4: Form Submission Tracked");
    };

    const trackSocialBtnClick = (label = "WhatsApp CTA") => {
        if (typeof window.gtag !== "function") return;
        window.gtag('event', 'social', {
            event_category: 'Engagement',
            event_label: label,
            value: 1
        });
        console.log("GA4:  Click Tracked " + label);
    };

    const initScrollTracking = () => {
        if (typeof window === "undefined") return;
        const handleScroll = () => {
            const scrolled = window.scrollY + window.innerHeight;
            const totalHeight = document.body.scrollHeight;
            const percent = Math.round((scrolled / totalHeight) * 100);
            if (percent >= 75 && !window.scrollTracked) {
                window.scrollTracked = true;
                if (typeof window.gtag === "function") {
                    window.gtag('event', 'scroll_75_percent', {
                        event_category: 'Scroll',
                        event_label: 'User Scrolled 75%',
                        value: percent
                    });
                    console.log("GA4: Scroll 75% Tracked");
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
    };

    const trackUTMSource = () => {
        if (typeof window === "undefined" || typeof window.gtag !== "function") return;

        const params = new URLSearchParams(window.location.search);
        const utm_source = params.get("utm_source") || "direct";
        const utm_medium = params.get("utm_medium") || "none";
        const utm_campaign = params.get("utm_campaign") || "none";

        window.gtag('event', 'utm_tracking', {
            event_category: 'Attribution',
            event_label: `${utm_source} | ${utm_medium} | ${utm_campaign}`,
            utm_source,
            utm_medium,
            utm_campaign
        });

        console.log("GA4: UTM Source Tracked", { utm_source, utm_medium, utm_campaign });
    };


    return { trackFormSubmit, trackSocialBtnClick, initScrollTracking, trackUTMSource }
}

export default GoogleAnalyticsTags