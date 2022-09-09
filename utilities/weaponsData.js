const weaponsData = [
    {
        info: "Wolf's Gravestone is a 5-Star Claymore. It is a longsword used by the Wolf Knight. Originally just a heavy sheet of iron given to the knight by a blacksmith from the city, it became endowed with legendary power owing to his friendship with the wolves. ",

        tool: "Wolf's Gravestone",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/4/4f/Weapon_Wolf%27s_Gravestone.png/",
    },

    {
        info: "The Unforged is a Liyue claymore. Capable of driving away evil spirits and wicked people alike, this edgeless claymore seems to possess divine might.",

        tool: "The Unforged",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/f/f7/Weapon_The_Unforged.png/",
    },

    {
        info: "A claymore that symbolizes the pride of Dvalin soaring through the skies. When swung, it emits a deep hum as the full force of Dvalin's command of the sky and the wind is unleashed.",

        tool: "Skyward Pride",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Weapon_Skyward_Pride.png/",
    },

    {
        info: "Prototype Archaic is a Liyue claymore. An ancient greatsword discovered in the Blackcliff Forge. It swings with such an immense force that one feels it could cut straight through reality itself.",

        tool: "The Prototype Archaic",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/a/ab/Weapon_Prototype_Archaic.png/",
    },

    {
        info: 'Engulfing Lightning is an Inazuman polearm. A naginata used to "cut grass." Any army that stands before this weapon will probably be likewise cut down...',

        tool: "Engulfing Lighting",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/2/21/Weapon_Engulfing_Lightning.png/",
    },

    {
        info: "This sharp polearm can seemingly pierce through anything. When swung, one can almost see the rift it tears in the air.",

        tool: "Vortex Vanquisher",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/d/d6/Weapon_Vortex_Vanquisher.png/",
    },

    {
        info: "A jade polearm made by the archons, capable of slaying ancient beasts.",

        tool: "Primordial Jade Winged-Spear",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/8/80/Weapon_Primordial_Jade_Winged-Spear.png/",
    },

    {
        info: 'A "firewood staff" that was once used in ancient and long-lost rituals.',

        tool: "Staff of Homa",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/1/17/Weapon_Staff_of_Homa.png/",
    },

    {
        info: 'A sword that blazes with a fierce violet light. The name "Reforged" comes from it having been broken once before.',

        tool: "Mistsplitter Reforged",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/0/09/Weapon_Mistsplitter_Reforged.png/",
    },

    {
        info: "The sword of a knight that symbolizes the restored honor of Dvalin. The blessings of the Anemo Archon rest on the fuller of the blade, imbuing the sword with the powers of the sky and the wind.",

        tool: "Skyward Blade",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/0/03/Weapon_Skyward_Blade.png/",
    },

    {
        info: 'A famed work by the Futsu line of smiths. The name "Haran" comes from the manner in which it resembles the violent, roiling waves.',

        tool: "Haran Geppaku Futsu",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/8/85/Weapon_Haran_Geppaku_Futsu.png/",
    },

    {
        info: "A straight sword, azure as antediluvian song, and as keen as the oaths of freedom taken in the Land of Wind.",

        tool: "Freedom-Sworn",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/3/39/Weapon_Freedom-Sworn.png/",
    },

    {
        info: "A pristine bow that is as sharp as the glaciers of the far north.",

        tool: "Polar Star",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/4/44/Weapon_Polar_Star.png/",

    },

    {
        info: "An extremely ancient bow that has retained its power despite its original master being long gone. It draws power from everyone and everything in the world, and the further away you are from that which your heart desires, the more powerful it is.",

        tool: "Amos",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/d/de/Weapon_Amos%27_Bow.png/",
    },

    {
        info: "This longbow's color is unpredictable. Under the light, it takes on a lustrous, watery blue.",

        tool: "Aqua Simulacra",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/c/cd/Weapon_Aqua_Simulacra.png/",
    },

    {
        info: "A longbow that was a gift from the Shogun. Eternal lightning crackles all around it.",

        tool: "Thundering Pulse",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/e/ee/Weapon_Thundering_Pulse_2nd.png/",
    },

    {
        info: "A stone dumbbell containing distant memories. Its endless transformations reveal the power within.",

        tool: "Memory of Dust",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/c/ca/Weapon_Memory_of_Dust.png/"
    },

    {
        info: "A string of lovely jasper from the deep sea. It shines with a pure radiance like that of the moon, and just as ever-distant.",

        tool: "Evelasting Moonglow",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Weapon_Everlasting_Moonglow.png/"
    },

    {
        info: "A cloud atlas symbolizing Dvalin and his former master, the Anemo Archon. It details the winds and clouds of the northern regions and contains the powers of the sky and wind.",

        tool: "skyward Atlas",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Weapon_Skyward_Atlas.png/"
    },

    {
        info: "The bells used when performing the Kagura Dance, blessed by the Guuji herself. The scent of the Sacred Sakura tree lingers on it.",

        tool: "Kagura's Verity",

        rarity: "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/",

        image: "https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Weapon_Kagura%27s_Verity.png/"
    },

];

module.exports = weaponsData;