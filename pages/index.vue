<template>
    <div class="flex flex-col space-y-24">
        <div class="bg-zinc-800 somebg relative -top-20 text-white min-h-screen h-[60rem] lg:h-full overflow-hidden">
            <img src="/collage.jpg" class="absolute z-10 object-cover h-full lg:w-full" />
            <div class="bg-black/40 absolute inset-0 w-full z-20" />
            <div class="relative z-30 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8 px-4 py-12 mt-24 lg:mt-72 max-w-8xl mx-auto justify-between h-[22rem]"
                data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                <div class="order-1 min-h-[20rem] lg:min-h-auto lg:order-2 flex flex-col justify-center">
                    <div class="flex items-start font-semibold">
                        <span class="text-4xl max-w-2xl lg:text-5xl break-words text-center lg:text-left">{{ current[0]
                            }}</span>
                    </div>
                </div>
                <div class="mt-3 order-2 lg:order-1 flex flex-col justify-center space-y-4">
                    <a href="/apply"
                        class="bg-blue-600 font-semibold rounded-xl text-lg text-center p-2 w-72 transition duration-500 ease-in-out transform hover:-translate-y-1">
                        JOIN AS VOLUNTEER
                    </a>
                    <a href="/complain"
                        class="bg-red-600 font-semibold rounded-xl text-lg text-center p-2 w-72 transition duration-500 ease-in-out transform hover:-translate-y-1">
                        RAISE A COMPLAINT
                    </a>
                </div>
            </div>
        </div>
        <div id="activities" class="flex flex-col space-y-4 px-1 max-w-7xl mx-auto py-4 w-full">
            <div class="flex flex-col space-y-4 max-w-7xl mx-auto py-12 px-12 items-left">
                <div class="text-4xl font-semibold mx-auto text-center text-black uppercase">
                    Our Activities
                </div>
            </div>
            <div class="flex flex-row flex-wrap items-stretch justify-center gap-8 mt-6">
                <MiscBox v-for="event in events" :key="event._id" :event="event" />
            </div>
        </div>
        <div id="about" class="flex flex-col space-y-4 px-1 max-w-7xl mx-auto py-4">
            <div data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                <CardSpecial title="About Us" :description="[
                    `Today's biggest challenge for a common man is crime in every place in our country with rising thefts, corruption, burglary, women and girl child safety, child abuse, drugs, emotional blackmailing and intimidation, adultery, etc.,. Many a times the issues get unnoticed, so the help is not rendered at the appropriate time for the people. However, there are also several instances the issues get addressed at the right time with the help from the police department, provided they are informed and given enough time to nab the culprits and justice delivered back. This is, however, a post facto mode of addressal of an issue and by then several changes and shifts in the case may take place.  However, there are several initiatives that are being run by the Department of Police to address and prevent crime in the society with the help from several institutions, social organizations and the awareness of  the public. The department is continuing to create the awareness as much as they can with the public to prevent crime in the first place. Although most of the cases justice is being delivered, the question still remains as to how to bring more awareness to the common man and prevent or weed out the crime from our society, so it becomes a great place for us to live a happy and peaceful life.`,
                    `As we all know for such crimes to get solved or fixed, time is the essence. This crime needs to be addressed at an appropriate time, bringing victims to justice by nabbing culprits or perpetrators and handing over to the police, thereby to continue to reduce the crime rate in the society. Besides police department is all time available to us in the front, it is also our equal responsibility to help and support the department in the way we can, by all means. Of course, but then the law that can never be taken into one's hands. This is where the guidance and recommended measures and practices are to be understood and followed by the public from the department of police.`,
                    `In an attempt to help police and the common man to come even more together at the right time, we thought that we could provide the required assistance in a way that we can, and started this initiative of Police and Public Connectors, a social organization to (a) provide people in the first place, the right awareness that is needed to safeguard themselves and how to prevent crime in the future (b) where to go to, and seek help when there is an issue in terms of providing the initial helping hand to the perplexed victim (most of the times) and connect them to the police at the right time. After all, the miscreants cannot take advantage to escape and get indirectly encouraged that such crime is amenable in the society. `,
                    `As a social organization, Police Public connectors was a registered entity under Certification Of Registration Under Section 10 of the Tamil Nadu Societies Registration Act, 1975 with Memorandum and Bye-Laws of Association in effect, and in this service for more than ten years organizing several public awareness events and roadshows in Chennai and providing right support to the police department. The initiative and the roadshows re being appreciated by the City Police Stations, Commissioner's Office, and Office of the Director General of Police (DGP). With their able encouragement and guidance, we also started to expand our coverage to several areas of Chennai city with the participation of like-minded people in and around us joining our institution as volunteers. `,
                    `In 2018, Dr. C Sailendrababu (IPS), Director of Police, unveiled the GRP app to assist passengers in Chennai Central Railway Station, and awareness roadshow was also conducted. Then our organization had distributed the GRP app to people in Central Egmore, Perambur, Tiruvannamalai, and all railway stations and also began conducting public service in Ambathur, Villivakkam, and other parts of the city.  `,
                    `With the continued gaining of awareness in public and traction for the need to be crime free society, we also launched an initiative to work closely with the colleges in Chennai for the students to participate as volunteers in our association to expand our services to assist the department of police.`,
                    `Several colleges in the city are coming forward to offer support to our efforts with their students ready to join our initiative as volunteer support. `,
                    `In 2022, we launched a website for the benefit of volunteers and to report crime by the public wherever it happens for our volunteers to pick up and rush to the spot to provide that initial handholding support to the victim and understanding the issue and help trace the culprits for the police to nab them on time.`,
                ]" />
            </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12 text-white max-w-7xl mx-auto p-2 lg:p-0" id="vision"
            data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
            <div
                class="bg-zinc-800 rounded-xl text-center lg:text-right p-2 lg:p-8 flex flex-col space-y-8 transition duration-500 ease-in-out transform hover:-translate-y-1 lg:hover:scale-110">
                <span class="text-xl lg:text-3xl text-red-400 font-semibold">Vision</span>
                <span class="text-sm lg:text-base text-justify">To build a crime free society for India to flourish and
                    have a great place for all of us to lead happy lives.</span>
                <ul class="flex flex-col items-left space-y-2 text-justify list-outside lg:list-outside list-disc">
                    <li v-for="(desc, i) in [
                        'Build a Corruption and Bribery Free Society.',
                        'Build a New India with Peace & Prosperity.',
                        `Creating continued awareness in public to prevent crime.`,
                        'Build a New India with Peace & Prosperity.',
                        'To ensure to safety of women and girls in India.',
                        'Own, Protect, Help and Be Part of Resolve to Enable our societies to Flourish.',
                    ]" :key="`desc${i}`" class="text-sm">
                        <i class="italic">{{ desc }}</i>
                    </li>
                </ul>
            </div>
            <div
                class="bg-zinc-800 rounded-xl text-center lg:text-left p-2 lg:p-8 flex flex-col space-y-8 transition duration-500 ease-in-out transform hover:-translate-y-1 lg:hover:scale-110">
                <span class="text-xl lg:text-3xl text-red-400 font-semibold">Mission</span>
                <span class="text-sm lg:text-base text-justify">
                    To work under the guidance of police department and
                </span>
                <ul class="flex flex-col items-left space-y-2 text-justify list-disc list-outside lg:list-outside">
                    <li v-for="(desc, i) in [
                        'To Connect Public & Police.',
                        'Collaborate with Public and a Police to bring Stronger Social Justice in our Judiciary.',
                        `Creating continued awareness in public to prevent crime.`,
                        `Help police department to trace culprits with the support from our volunteers.`,
                        `Help police department to trace culprits with the support from our volunteers.`,
                    ]" :key="`desc${i}`" class="text-sm">
                        <i class="italic">{{ desc }}</i>
                    </li>
                </ul>
            </div>
        </div>
        <div id="aim" class="flex flex-col space-y-4 px-1 max-w-7xl mx-auto py-12">
            <div data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                <CardList title="Our Aims and Objectives" :description="[
                    `Social interaction among members or volunteers of the association.`,
                    `Conduct awareness sessions to the public.`,
                    `Conduct training programs to members of the association.`,
                    `Reach out to police services on time.`,
                    `Provide required help and assistance to victims to relieve them from the state of shock and help police nab the culprits and perpetrators.`,
                    `Make communities and public to be aware of police duties and functions including but not limited to the addressal of core issues such as domestic violence, child abuse, protection and rights, youth issues and problems, legal awareness, fire prevention measures and several other fire prevention measures.`,
                    `Build trust and confidence in police by the public.`,
                ]" />
            </div>
        </div>
        <div class="bg-zinc-800 text-white">
            <div id="volunteer" class="flex flex-col space-y-4 text-base px-2 lg:px-12 max-w-7xl mx-auto py-12">
                <div class="text-4xl font-semibold mx-auto text-center uppercase">
                    Volunteers
                </div>
                <span class="text-justify py-12">
                    Police Public Connectors is an initiative to work closely
                    with the colleges in Chennai for the students to participate
                    as volunteers in our association to expand our services to
                    assist the Department of Police.</span>

                <CardList class="mx-left" title="Eligibility" :description="[
                    'Volunteer should be 18 years of age or older.',
                    'Volunteer should not possess any crime report or civil convictions before.',
                    'Volunteer should be a citizen of India.',
                    'Volunteer must have consent from parent / guardian is required if they are a student.',
                    'Volunteer must have social responsibility and urge to contribute towards society.',
                    'Volunteer must carry an Indian Personal Identification such as Aadhar.',
                ]" />
                <CardList class="mx-left" title="Perks" :description="[
                    'Approval letter from government.',
                    'Uniform / Jacket from Police Public Connectors.',
                    'Police Public Connectors Volunteer identity card.',
                    'Official Police Public Connectors badge.',
                    'A supportive community.',
                    'Recognition and appreciation for exceptional volunteers.',
                ]" />

                <div class="py-4 space-y-4">
                    <a href="/apply"
                        class="block mx-auto bg-red-600 font-semibold rounded-xl text-lg text-center p-2 w-72 transition duration-500 ease-in-out transform hover:-translate-y-1">
                        JOIN AS VOLUNTEER
                    </a>
                </div>
            </div>
        </div>
        <div class="w-full py-2 mx-auto space-y-8">
            <div class="flex flex-col space-y-4 max-w-7xl mx-auto py-12 px-12 items-left">
                <div class="text-4xl font-semibold mx-auto text-center text-black uppercase">
                    Leadership
                </div>
            </div>
            <div id="leaders" class="max-w-7xl mx-auto grid grid-cols-1 gap-8 items-center justify-between w-full"
                data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                <CardPerson v-for="(item, i) in leaders" :news="item" :left="i % 2 === 0 ? true : false"
                    :key="item.title" class="transition duration-500 w-full ease-in-out transform" />
            </div>
        </div>

        <div id="events" class="max-w-7xl mx-auto flex flex-col space-y-4 items-stretch justify-between"
            data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
            <div class="text-4xl mx-auto text-center text-black uppercase">
                Gallery
            </div>

            <MiscTileCarousel :images="eventList" />
        </div>

        <div id="report-btn" class="max-w-7xl w-full mx-auto flex flex-col space-y-4 justify-between">
            <MiscMessage type="zinc">Click the button below in order to file a complaint. Volunteers
                will be notified and will act accordingly.</MiscMessage>
            <a href="/complain"
                class="rounded-2xl bg-red-600 text-center text-white p-4 max-w-md mx-auto font-semibold uppercase transition duration-500 ease-in-out transform hover:-translate-y-1">
                File a Complaint
            </a>
        </div>

        <div class="h-[1rem]" />
    </div>
    <div id="contact" class="text-4xl font-semibold mx-auto text-center text-black">
        CONTACT US
    </div>
    <div class="p-2 flex py-16 flex-col item-center text-black stroke-black ml-auto">
        <CardContact />
    </div>
</template>

<style>
.somebg {
    background-color: #374151;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='338' height='338' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23006C6B' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23009C9B'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
<script setup>
import eventList from "@/data/Events.js";

//const languageSettings = localStorage.getItem("ppc_preferred_lang");

const leaders = [
    {
        title: "C. Thiyagarajan",
        description: `He is running a security company for the past 20 years in creating an opportunity himself from his childhood aspiration did not come true, to become a police officer to work for social justice, law and order. With this unwavering desire, the Public Police Connectors was started with an objective to contribute to the immediate accessible society around us, by delivering security service to people at Chennai Central Railway Station for their safety and protection from thefts and crime. He added his own team by providing proper training to them to monitor, protect and warn people to enhance their safety. This had become a success when he and his team were appreciated by the police department when the crime rate went down. He also led several events and roadshows to bring awareness to the public in safety and protection.`,
        subtitle: "FOUNDER",
        image: "/people/Thiyagarajan.jpeg",
    },
    {
        title: "M. Ilangovan B.Sc., B.L.",
        description: `Born in 1970 in Chennai, M. Ilangovan had his early education at the prestigious Don Bosco Higher Secondary School in the city. After completing his schooling, he pursued his undergraduate studies at Vivekananda College in Mylapore, Chennai, where he earned his B.Sc. degree from 1987 to 1990. Following his graduation, Ilangovan decided to further his education in the field of law. He enrolled at the renowned Madras Law College and successfully completed his B.L. degree, making him a qualified legal professional. Ilangovan joined judicial service in 1999 and his career spanned over 25 years, from 1999 to 2024. During this time, he served in various locations across Tamil Nadu, including Vellore, Salem, Thiruvannamalai, Tanjore, Thiruvallur, Chennai, and Chenglepet. His extensive experience and expertise in the legal field allowed him to make valuable contributions to the justice system in these regions. Throughout his career, Ilangovan demonstrated a strong commitment to his work and a deep understanding of the law. His dedication and professionalism earned him the respect of his colleagues and clients alike, making him a respected figure in the legal community.`,
        subtitle: "District Judge (Retd)",
        image: "/people/Ilangovan.jpg",
    },
    {
        title: "Sekar Sethuraj",
        description: `He was retired at the rank of Deputy Superintendent of Police with 25 years of distinguished service. Starting as a Sub-Inspector in 1997, he rose to Assistant Commissioner, earning accolades for bravery and public service, including a Gold Medal for saving lives during a crisis. He also contributed to mental health rehabilitation, road safety awareness, and high-profile investigations. After retiring voluntarily in 2022, he dedicated himself to social service and farming.`,
        subtitle: "Deputy Superintendent of Police (Retd)",
        image: "/people/sekar.jpg",
    },
];

definePageMeta({
    title: "Home",
});

const events = await queryContent("activities").find();

const typer = [
    "Help fight against drugs.",
    "Help communities come closer and harmonise.",
    "Collaborate with public and police to bring stronger social justice.",
    "Build a corruption-free and bribary-free society.",
    "Build a great place to live by all communities.",
    "Build a new India with peace & prosperity.",
    "Women safety and protection are our highest priority.",
    "Be responsible to build future India.",
    "Own, protect, help and be part of resolve to enable our society to flourish.",
    "Be proud that we are part of this great initiative.",
];
const current = ref(["", "", 0]);

const changeHero = () => {
    if (current.value[2] === typer.length - 1) {
        current.value[2] = 0;
    } else {
        current.value[2] += 1;
    }
    current.value[0] = "";
    current.value[1] = "";
    for (let i = 0; i < typer[current.value[2]].length; ++i) {
        setTimeout(
            () => (current.value[0] += typer[current.value[2]][i]),
            100 * i
        );
    }
    for (let i = 0; i < typer[current.value[2]].length; ++i) {
        setTimeout(
            () =>
            (current.value[0] = String(current.value[0]).substring(
                0,
                current.value[0].length - 2
            )),
            10000 * (500 + i + typer[current.value[2]].length)
        );
    }
};

onMounted(() => {
    changeHero();
    setInterval(changeHero, 10000);
});
</script>
