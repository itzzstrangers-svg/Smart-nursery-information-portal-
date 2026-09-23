document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const mainNav = document.getElementById("mainNav");

    menuBtn.addEventListener("click", () => {
        mainNav.classList.toggle("open");
    });

    document.querySelectorAll("#mainNav a").forEach(link => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");
        });
    });


    /* =====================================================
       CUSTOM CURSOR
    ===================================================== */

    const cursor = document.querySelector(".cursor");
    const ring = document.querySelector(".cursor-ring");

    if (window.innerWidth > 700) {

        let mouseX = 0;
        let mouseY = 0;

        let ringX = 0;
        let ringY = 0;

        document.addEventListener("mousemove", e => {

            mouseX = e.clientX;
            mouseY = e.clientY;

            cursor.style.left = mouseX + "px";
            cursor.style.top = mouseY + "px";

        });

        function moveRing() {

            ringX += (mouseX - ringX) * .12;
            ringY += (mouseY - ringY) * .12;

            ring.style.left = ringX + "px";
            ring.style.top = ringY + "px";

            requestAnimationFrame(moveRing);
        }

        moveRing();

        document.querySelectorAll("a,button,input,select").forEach(el => {

            el.addEventListener("mouseenter", () => {
                ring.style.width = "55px";
                ring.style.height = "55px";
            });

            el.addEventListener("mouseleave", () => {
                ring.style.width = "35px";
                ring.style.height = "35px";
            });

        });
    }


    /* =====================================================
       GSAP ANIMATIONS
    ===================================================== */

    if (typeof gsap !== "undefined") {

        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".navbar", {
            y: -50,
            opacity: 0,
            duration: .8,
            ease: "power3.out"
        });

        gsap.from(".hero h1 .line", {
            y: 90,
            opacity: 0,
            duration: 1,
            stagger: .12,
            ease: "power4.out"
        });

        gsap.from(".hero-description", {
            y: 30,
            opacity: 0,
            delay: .5,
            duration: .8
        });

        gsap.from(".hero-actions", {
            y: 25,
            opacity: 0,
            delay: .7,
            duration: .7
        });

        gsap.from(".hero-points", {
            y: 20,
            opacity: 0,
            delay: .9,
            duration: .7
        });

        gsap.from(".plant-planet", {
            scale: .3,
            opacity: 0,
            duration: 1.2,
            ease: "elastic.out(1,.5)"
        });

        gsap.from(".floating-info", {
            scale: 0,
            opacity: 0,
            stagger: .2,
            delay: .5,
            duration: .8,
            ease: "back.out(1.7)"
        });

        gsap.utils.toArray(
            ".feature-card,.plant-card,.care-card,.category-grid button"
        ).forEach(card => {

            gsap.from(card, {

                y: 45,
                opacity: 0,

                duration: .7,

                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }

            });

        });

        gsap.to(".hero-visual", {

            y: 70,

            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: 1
            }

        });
    }


    /* =====================================================
       PLANT DATABASE
    ===================================================== */

    const plants = [

        {
            name: "Snake Plant",
            scientific: "Dracaena trifasciata",
            emoji: "🌿",
            category: "indoor",
            sunlight: "low",
            water: "low",
            beginner: true,
            environment: ["indoor"],
            benefit: "Easy to maintain",
            tags: ["Easy", "Low light", "Low water"]
        },

        {
            name: "Money Plant",
            scientific: "Epipremnum aureum",
            emoji: "🪴",
            category: "indoor",
            sunlight: "medium",
            water: "medium",
            beginner: true,
            environment: ["indoor", "balcony"],
            benefit: "Decorative",
            tags: ["Easy", "Indoor", "Popular"]
        },

        {
            name: "Peace Lily",
            scientific: "Spathiphyllum",
            emoji: "🌱",
            category: "indoor",
            sunlight: "medium",
            water: "high",
            beginner: true,
            environment: ["indoor"],
            benefit: "Decorative",
            tags: ["Indoor", "Moist soil"]
        },

        {
            name: "Aloe Vera",
            scientific: "Aloe barbadensis",
            emoji: "🌵",
            category: "medicinal",
            sunlight: "high",
            water: "low",
            beginner: true,
            environment: ["indoor", "balcony"],
            benefit: "Medicinal use",
            tags: ["Medicinal", "Low water", "Sunny"]
        },

        {
            name: "Rose",
            scientific: "Rosa",
            emoji: "🌹",
            category: "flowering",
            sunlight: "high",
            water: "medium",
            beginner: false,
            environment: ["outdoor", "balcony"],
            benefit: "Flowers",
            tags: ["Flowering", "Sunny"]
        },

        {
            name: "Marigold",
            scientific: "Tagetes",
            emoji: "🌼",
            category: "flowering",
            sunlight: "high",
            water: "medium",
            beginner: true,
            environment: ["outdoor", "balcony"],
            benefit: "Flowering",
            tags: ["Beginner", "Sunny"]
        },

        {
            name: "Basil",
            scientific: "Ocimum basilicum",
            emoji: "🌿",
            category: "herb",
            sunlight: "high",
            water: "medium",
            beginner: true,
            environment: ["balcony", "outdoor"],
            benefit: "Edible herb",
            tags: ["Herb", "Edible", "Sunny"]
        },

        {
            name: "Mint",
            scientific: "Mentha",
            emoji: "🍃",
            category: "herb",
            sunlight: "medium",
            water: "high",
            beginner: true,
            environment: ["balcony", "outdoor"],
            benefit: "Kitchen herb",
            tags: ["Herb", "Edible"]
        },

        {
            name: "Hibiscus",
            scientific: "Hibiscus rosa-sinensis",
            emoji: "🌺",
            category: "flowering",
            sunlight: "high",
            water: "medium",
            beginner: false,
            environment: ["outdoor"],
            benefit: "Flowers",
            tags: ["Outdoor", "Flowering"]
        },

        {
            name: "Neem",
            scientific: "Azadirachta indica",
            emoji: "🌳",
            category: "medicinal",
            sunlight: "high",
            water: "low",
            beginner: true,
            environment: ["outdoor"],
            benefit: "Traditional uses",
            tags: ["Tree", "Hardy"]
        },

        {
            name: "Lemon",
            scientific: "Citrus limon",
            emoji: "🍋",
            category: "fruit",
            sunlight: "high",
            water: "medium",
            beginner: false,
            environment: ["outdoor", "balcony"],
            benefit: "Fruit",
            tags: ["Fruit", "Sunny"]
        },

        {
            name: "Guava",
            scientific: "Psidium guajava",
            emoji: "🍈",
            category: "fruit",
            sunlight: "high",
            water: "medium",
            beginner: false,
            environment: ["outdoor"],
            benefit: "Fruit",
            tags: ["Fruit", "Outdoor"]
        },

        {
            name: "Spider Plant",
            scientific: "Chlorophytum comosum",
            emoji: "🌱",
            category: "indoor",
            sunlight: "medium",
            water: "medium",
            beginner: true,
            environment: ["indoor"],
            benefit: "Easy care",
            tags: ["Easy", "Indoor"]
        },

        {
            name: "Lavender",
            scientific: "Lavandula",
            emoji: "💜",
            category: "herb",
            sunlight: "high",
            water: "low",
            beginner: false,
            environment: ["balcony", "outdoor"],
            benefit: "Aromatic",
            tags: ["Aromatic", "Sunny"]
        }

    ];


    /* =====================================================
       PLANT CARD
    ===================================================== */

    function createPlantCard(plant) {

        return `

        <article class="plant-card">

            <div class="plant-image">
                ${plant.emoji}
            </div>

            <h3>${plant.name}</h3>

            <div class="scientific">
                ${plant.scientific}
            </div>

            <div class="plant-info">

                <div class="info-pill">
                    ☀️ ${sunlightText(plant.sunlight)}
                </div>

                <div class="info-pill">
                    💧 ${waterText(plant.water)}
                </div>

            </div>

            <div class="tags">

                ${plant.tags.map(tag => `
                    <span class="tag">${tag}</span>
                `).join("")}

            </div>

        </article>

        `;
    }


    function sunlightText(value) {

        const data = {
            low: "Low light",
            medium: "Partial",
            high: "Bright"
        };

        return data[value];
    }


    function waterText(value) {

        const data = {
            low: "Low water",
            medium: "Moderate",
            high: "High water"
        };

        return data[value];
    }


    /* =====================================================
       PLANT LIBRARY
    ===================================================== */

    const plantGrid = document.getElementById("plantGrid");

    const plantSearch = document.getElementById("plantSearch");

    const categoryFilter =
        document.getElementById("categoryFilter");

    const sunFilter =
        document.getElementById("sunFilter");

    const waterFilter =
        document.getElementById("waterFilter");


    function displayPlants() {

        const search =
            plantSearch.value.toLowerCase().trim();

        const category =
            categoryFilter.value;

        const sun =
            sunFilter.value;

        const water =
            waterFilter.value;


        const filtered = plants.filter(plant => {

            const searchMatch =
                plant.name.toLowerCase().includes(search) ||
                plant.scientific.toLowerCase().includes(search) ||
                plant.tags.some(tag =>
                    tag.toLowerCase().includes(search)
                );

            return (

                searchMatch &&

                (category === "all" ||
                    plant.category === category) &&

                (sun === "all" ||
                    plant.sunlight === sun) &&

                (water === "all" ||
                    plant.water === water)

            );

        });


        if (filtered.length === 0) {

            plantGrid.innerHTML = `

                <div style="
                    grid-column:1/-1;
                    background:white;
                    padding:50px;
                    border-radius:25px;
                    text-align:center;
                ">

                    <div style="font-size:55px;">🌱</div>

                    <h3>No plants found</h3>

                    <p style="color:#667269">
                        Try different filters.
                    </p>

                </div>

            `;

            return;
        }


        plantGrid.innerHTML =
            filtered.map(createPlantCard).join("");


        if (typeof gsap !== "undefined") {

            gsap.from(".plant-card", {
                y: 25,
                opacity: 0,
                duration: .45,
                stagger: .05
            });

        }

    }


    plantSearch.addEventListener("input", displayPlants);
    categoryFilter.addEventListener("change", displayPlants);
    sunFilter.addEventListener("change", displayPlants);
    waterFilter.addEventListener("change", displayPlants);

    displayPlants();


    /* =====================================================
       SMART RECOMMENDATION
    ===================================================== */

    const recommendBtn =
        document.getElementById("recommendBtn");

    const recommendationResult =
        document.getElementById("recommendationResult");


    recommendBtn.addEventListener("click", () => {

        const environment =
            document.getElementById("environment").value;

        const sun =
            document.getElementById("finderSun").value;

        const water =
            document.getElementById("finderWater").value;

        const experience =
            document.getElementById("experience").value;


        let matches = plants.filter(plant => {

            const environmentMatch =
                environment === "all" ||
                plant.environment.includes(environment);

            const sunMatch =
                sun === "all" ||
                plant.sunlight === sun;

            const waterMatch =
                water === "all" ||
                plant.water === water;

            const experienceMatch =
                experience === "all" ||
                (experience === "beginner" && plant.beginner) ||
                experience === "expert";

            return (
                environmentMatch &&
                sunMatch &&
                waterMatch &&
                experienceMatch
            );

        });


        if (matches.length === 0) {

            recommendationResult.innerHTML = `

                <div class="plant-card">

                    <div class="plant-image">🌱</div>

                    <h3>No exact match</h3>

                    <p>
                        Try selecting fewer conditions.
                    </p>

                </div>

            `;

            return;
        }


        matches = matches.slice(0, 6);


        recommendationResult.innerHTML =
            matches.map(createPlantCard).join("");


        if (typeof gsap !== "undefined") {

            gsap.from(".recommendation-result .plant-card", {

                y: 35,
                opacity: 0,
                stagger: .08,
                duration: .6

            });

        }

    });


    /* =====================================================
       CATEGORY SHORTCUTS
    ===================================================== */

    document.querySelectorAll(".category-grid button")
        .forEach(button => {

            button.addEventListener("click", () => {

                const category =
                    button.dataset.category;

                categoryFilter.value = category;

                displayPlants();

                document
                    .getElementById("plants")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            });

        });


    /* =====================================================
       PLANT PROBLEM DIAGNOSIS
    ===================================================== */

    const problemData = {

        yellow: {
            title: "Possible watering or nutrient problem",
            description:
                "Yellow leaves can be associated with overwatering, underwatering, poor drainage or nutrient deficiency.",
            action:
                "Check soil moisture and drainage before watering again."
        },

        spots: {
            title: "Possible leaf spot problem",
            description:
                "Brown or black spots may be associated with fungal or bacterial problems, injury or unsuitable moisture.",
            action:
                "Remove badly affected leaves and improve air circulation."
        },

        wilting: {
            title: "Possible water stress",
            description:
                "Wilting can occur because of dry soil, root damage or excessive watering.",
            action:
                "Check the soil and drainage before adding more water."
        },

        white: {
            title: "Possible powdery mildew",
            description:
                "White powder-like material may be associated with powdery mildew.",
            action:
                "Improve air circulation and avoid keeping leaves continuously wet."
        },

        curling: {
            title: "Possible environmental stress or pests",
            description:
                "Curling leaves may be associated with heat, inconsistent watering, pests or environmental changes.",
            action:
                "Inspect the underside of leaves and check environmental conditions."
        },

        insects: {
            title: "Possible pest infestation",
            description:
                "Small insects may indicate aphids, mealybugs, mites, whiteflies or other common pests.",
            action:
                "Inspect leaves and stems carefully and isolate heavily affected plants."
        }

    };


    document
        .getElementById("diagnoseBtn")
        .addEventListener("click", () => {

            const selected = [
                ...document.querySelectorAll(
                    ".symptom-box input:checked"
                )
            ].map(input => input.value);


            const result =
                document.getElementById("diagnosisResult");


            if (selected.length === 0) {

                result.innerHTML = `

                    <div class="empty-result">

                        <span>⚠️</span>

                        <h3>Select at least one symptom</h3>

                        <p>
                            Choose symptoms to generate a basic report.
                        </p>

                    </div>

                `;

                return;
            }


            result.innerHTML = `

                <div>

                    <span class="section-number">
                        PLANT HEALTH REPORT
                    </span>

                    <h3 style="
                        font-family:'Plus Jakarta Sans';
                        margin:10px 0 20px;
                    ">
                        Possible plant problems
                    </h3>

                    ${selected.map(key => {

                        const item = problemData[key];

                        return `

                            <div class="diagnosis-item">

                                <strong>
                                    ${item.title}
                                </strong>

                                <p>
                                    ${item.description}
                                </p>

                                <p style="margin-top:8px;">
                                    <b>Recommended:</b>
                                    ${item.action}
                                </p>