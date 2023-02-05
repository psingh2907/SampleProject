const register_options = [
    {
        id: 0,
        label: "STUDENT"
    },
    {
        id: 1,
        label: "TUTOR"
    }
]

export const walkthrough = [
    {
        id: 0,
        title: "First Stripe Earned",
        sub_title: "Top 10% of highest spending players in a month",
        image: require("../../assets/images/rising_star.png")
    },
    {
        id: 1,
        title: "Born Winner",
        sub_title: "Top 10% of highest spending players in a month",
        image: require("../../assets/images/rising_star.png")
    },
    {
        id: 2,
        title: "Trader of the Month",
        sub_title: "Won 7 under-over games in a row",
        image: require("../../assets/images/rising_star.png")
    },
    {
        id: 3,
        title: "Jackpot",
        sub_title: "Won 7 under-over games in a row",
        image: require("../../assets/images/rising_star.png")
    },
    {
        id: 4,
        title: "Trader of the Month",
        sub_title: "Won 7 under-over games in a row",
        image: require("../../assets/images/rising_star.png")
    },
    {
        id: 5,
        title: "Rising Star",
        sub_title: "Won 7 under-over games in a row",
        image: require("../../assets/images/rising_star.png")
    },
    {
        id: 6,
        title: "Trader of the Month",
        sub_title: "Won 7 under-over games in a row",
        image: require("../../assets/images/rising_star.png")
    },
]

const categories = [
    {
        id: 0,
        label: "Mobile Design",
        icon: require("../../assets/icons/mobile.png")
    },
    {
        id: 1,
        label: "3D Modeling",
        icon: require("../../assets/icons/model_3d.png")
    },
    {
        id: 2,
        label: "Web Designing",
        icon: require("../../assets/icons/web_design.png")
    },
    {
        id: 3,
        label: "Illustrations",
        icon: require("../../assets/icons/illustration.png")
    },
    {
        id: 4,
        label: "Drawing",
        icon: require("../../assets/icons/drawing.png")
    },
    {
        id: 5,
        label: "Animation",
        icon: require("../../assets/icons/animation.png")
    },
    {
        id: 6,
        label: "Education",
        icon: require("../../assets/icons/education.png")
    },
    {
        id: 7,
        label: "Networking",
        icon: require("../../assets/icons/networking.png")
    },
    {
        id: 8,
        label: "Coding",
        icon: require("../../assets/icons/coding.png")
    },
]

const screens = {
    home: "Home",
    search: "Search",
    profile: "Profile"
}

export const home_strings = {
    todays_games:`Today's Games`,
    under_or_over:'UNDER OR OVER',
    starting_in:'Starting in',
    starting_in_time:`03:23:12`,
    bitcoin_price:'Bitcoin price will be under',
    dollar:`$24,524 at 7 a ET on 22nd Jan’21`,
    prize_pool:'PRIZE POOL',
    under:'UNDER',
    over:'OVER',
    entery_fees:'ENTRY FEES',
    prize_price:`$12,000`,
    under_data:`3.25x`,
    over_data:`1.25x`,
    entry_data:'5',
    whats_your_prediction:`What's your prediction?`,
    under1:'Under',
    over1:'Over',
    players:`355 Players`,
    view_chart:'View Chart',
    predicted_under:'232 predicted under',
    predicted_over:'123 predicted over',
    //modal
    your_prediction:'Your Prediction is Under',
    entry_tickets:'ENTRY TICKETS',
    you_can_win:'You can win',
    total:'Total',
    submit_my_prediction:'Submit my prediction',
    //profile
    JinaSimons:'Jina Simons',
    info_jina:'I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!',
    points:'6000 Pts',
    logout:'Logout',
    top5:'Top 5',
    uppercent:'81%',
    downpercent:'-51%',
    games_played:`Game's Played`,
    badges:'Badges',
    first_stripe_earned:`First Stripe Earned`,
    top_players:`Top 10% of highest spending players in a month`,
    underOver2:'Under or Over'


}

const bottom_tabs = [
    {
        id: 0,
        label: screens.home,
        icon: require("../../assets/icons/home.png")
    },
    {
        id: 1,
        label: screens.search,
        icon: require("../../assets/icons/search.png")
    },
    {
        id: 2,
        label: screens.profile,
        icon: require("../../assets/icons/profile.png")
    }
]

const class_types = [
    {
        id: 0,
        label: "All",
        icon: require("../../assets/icons/all.png")
    },
    {
        id: 1,
        label: "Staff Pick",
        icon: require("../../assets/icons/staff_pick.png")
    },
    {
        id: 2,
        label: "Original",
        icon: require("../../assets/icons/original.png")
    },
]

const class_levels = [
    {
        id: 0,
        label: "Beginner"
    },
    {
        id: 1,
        label: "Intermediate"
    },
    {
        id: 2,
        label: "Advanced"
    }
]

const created_within = [
    {
        id: 0,
        label: "All Time"
    },
    {
        id: 1,
        label: "This Month"
    },
    {
        id: 2,
        label: "This Week"
    },
    {
        id: 3,
        label: "This Day"
    },
    {
        id: 4,
        label: "2 Months"
    },
    {
        id: 5,
        label: "4 Months"
    }
]

const course_details_tabs = [
    {
        id: 0,
        label: "Chapters",
    },
    {
        id: 1,
        label: "Files",
    },
    {
        id: 2,
        label: "Discussions",
    }
]

export default {
    register_options,
    // walkthrough,
    categories,
    screens,
    bottom_tabs,
    class_types,
    class_levels,
    created_within,
    course_details_tabs,
    // home_strings
}