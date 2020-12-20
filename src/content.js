const content = {
    site: {
        title: "Testing 1,2,3",
        tagline: "Cliquez sur une photo pour voir les détails. L'aspect graphique est provisoire..",
    },
    interviews: {
        journalistes: [
            {
                prenom: "Kylrest",
                nom: "Anomeh",
                initiales: "KA"
            },
            {
                prenom: "Mario",
                nom: "di Luigi",
                initiales: "MdL"
            },
            {
                prenom: "Hungah",
                nom: "du Coin",
                initiales: "HdC"
            },
            {
                prenom: "Jammah",
                nom: "Koustic",
                initiales: "JK"
            },
        ],
        lieux: [
            "au bord de la plage",
            "au détour d'une balade en forêt",
            "sur la terrasse d'un de nos sympathiques restaurants",
            "lors d'une balade à la rame"
        ],
        quand: [
            "cet été",
            "en septembre passé",
            "il y a peu",
            "la semaine passée",
            "avant le dépôt des listes",
        ]
    },
    personnes: [
        {
            prenom: "Bertrand",
            nom: "Delacrétaz",
            habite: "la région",
            depuis: "2014",
            phrase: "Ingénieur, membre du comité de la fondation Spirou & Fantasio à Orbe, brasseur amateur, navigateur, cycliste et musicien.",
            interview: {
                qr: [
                    {
                        q: "On peut se tutoyer?",
                        r: "Bien sûr!",
                    },
                    {
                        q: "Un plat préféré?",
                        r: "La soupe à la bière, en hiver!",
                    },
                    {
                        q: "Un livre préféré?",
                        r: "'La mer est ronde', de Jean-François Deniau. Poésie et rêves, sur un sujet qui me passionne.",
                    },
                ]
            }
        },
    ]
}

// add some fake data
for(var i=1 ; i <= 8; i++) {
    content.personnes.push({
        prenom: "Leonardo",
        nom: `da Vinci #${i}`,
        habite: "Milano",
        depuis: "fort longtemps",
        phrase: `Leo for president!...#${i}`
    });
    content.personnes.push({
        prenom: "Gaston",
        nom: `Lagaffe #${i}`,
        habite: "Dupuis City",
        depuis: "quelques années",
        phrase: `Gaston comme président!...#${i}`
    });
    content.personnes.push({
        prenom: "Marie",
        nom: `Curie #${i}`,
        habite: "Varsovie",
        depuis: "avant, tout avant",
        phrase: `Marie est très active en radio...#${i}`
    });
}

// remove accented chars
function cleanupKey(key) {
    // TODO regex for accented chars?
    return key.split('#')[0].trim().replace('é','e').replace(' ', '-');
}

// compute person keys, full names and URLs for pictures etc
content.personnes.map(p => {
    p.key = cleanupKey(`${p.prenom}-${p.nom}`.toLowerCase());
    p.photoURL = `./images/personnes/${p.key}.jpg`;
    p.squarePhotoURL = `./images/personnes/${p.key}-square.jpg`;
    p.fullName = `${p.prenom} ${p.nom}}`
    return null;
})

// random sort the list of persons
function randomCompare(a,b) {
    return 0.5 - Math.random();
}
content.personnes = content.personnes.sort(randomCompare);

// assign fake journalists
function randomSelect(fromArray) {
    return fromArray[Math.floor(Math.random() * fromArray.length)];
}
content.personnes.map(p => {
    const qr = p.interview && p.interview.qr ? p.interview.qr : [];
    p.interview = {
        journaliste: randomSelect(content.interviews.journalistes),
        lieu: randomSelect(content.interviews.lieux),
        quand: randomSelect(content.interviews.quand),
        qr: qr,
    }
    return null;
})

// compute indexes
var index=0;
content.personnes.map(p => {
    p.index = index++;
    return null;
})

module.exports = content