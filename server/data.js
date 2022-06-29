//title, description, link

const data = [
    {
        id: 1,
        title: 'Cat - Wikipedia',
        link: 'https://en.wikipedia.org/wiki/Cat',
        description: 'The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.',
        keyword: 'cat'
    },
    { 
        id: 2, 
        title: 'cat | Breeds & Facts - Encyclopedia Britannica', 
        link: 'https://www.britannica.com/animal/cat',
        description: 'cat, (Felis catus), also called house cat or domestic cat, domesticated member of the family Felidae, order Carnivora, and the smallest member of that family. ',
        keyword: 'cat' 
    },
    { 
        id: 3, 
        title: 'Cat | National Geographic', 
        link: 'https://www.nationalgeographic.com/animals/mammals/facts/domestic-cat',
        description: 'Domestic cats, no matter their breed, are all members of one species. Relationship with Humans. Felis catus has had a very long relationship with humans. ',
        keyword: 'cat' 
    },
    { 
        id: 4, 
        title: 'Cat Care Tips, Advice & Health Information | RSPCA', 
        link: 'https://www.rspca.org.uk/adviceandwelfare/pets/cats',
        description: 'Cats make affectionate and playful pets, but it\'s important to have a good understanding of their needs before you welcome one into your home.',
        keyword: 'cat' 
    },
    { 
        id: 5, 
        title: 'Caterpillar | Caterpillar', 
        link: 'https://www.caterpillar.com/',
        description: 'Caterpillar Inc. (NYSE: CAT) today announced it will move its global headquarters to the company\'s existing office in Irving, Texas, from its current location in Deerfield, Illinois',
        keyword: 'cat' 
    },
    { 
        id: 6, 
        title: 'Cats Protection | UK\'s Largest Cat Welfare Charity', 
        link: 'https://www.britannica.com/animal/cat',
        description: 'We are the UK\'s leading cat charity. We help 200000 cats and kittens every year - with your support we can help even more.',
        keyword: 'cat' 
    },
    { 
        id: 7, 
        title: 'Committee against Torture - OHCHR', 
        link: 'https://www.ohchr.org/en/treaty-bodies/cat',
        description: 'The Committee against Torture (CAT) is the body of 10 independent experts that monitors implementation of the Convention against Torture and Other Cruel, Inhuman or Degrading Treatment or Punishment by its States parties.',
        keyword: 'cat' 
    },
    { 
        id: 8, 
        title: 'Centre for Alternative Technology: Home', 
        link: 'https://cat.org.uk/',
        description: 'To avoid disastrous climate change we must take radical action now. CAT offers practical solutions and hands-on learning to help create a zero carbon world.',
        keyword: 'cat' 
    },
    { 
        id: 9, 
        title: 'Comfortable Work Shoes | Cat Footwear', 
        link: 'https://www.catfootwear.com/US/en/home',
        description: 'Official Cat Footwear Site - Shop Caterpillar work boots, steel toe work boots & shoes along with casual shoes & casual boots. Free shipping! ',
        keyword: 'cat' 
    },
    { 
        id: 10, 
        title: 'Complete Guide to Caring for Cats - Vetstreet', 
        link: 'http://www.vetstreet.com/cats/',
        description: 'Your cat\'s online owners manual, featuring articles about breed information, cat selection, training, grooming and care for cats and kittens. ',
        keyword: 'cat' 
    },
    { 
        id: 11, 
        title: 'Dog (2022) - IMDb', 
        link: 'https://www.imdb.com/title/tt11252248/',
        description: 'Two former Army Rangers are paired against their will on the road trip of a lifetime. Briggs (Channing Tatum) and Lulu (a Belgian Malinois) race down the Pacific Coast to get to a fellow soldier\'s funeral on time.',
        keyword: 'dog' 
    },
    { 
        id: 12, 
        title: 'Dog Breeds - Types Of Dogs - American Kennel Club', 
        link: 'https://www.akc.org/dog-breeds/',
        description: '8 Jun 2022 — What\'s a dog breed? People have been breeding dogs since prehistoric times. The earliest dog breeders used wolves to create domestic dogs.',
        keyword: 'dog' 
    },
    { 
        id: 13, 
        title: 'Dogs Trust: Dogs Rehoming & Dog Rescue Charity', 
        link: 'https://www.dogstrust.org.uk/',
        description: 'Dogs Trust is the UK\'s largest Dog Welfare Charity. Looking to rehome a rescue dog or to donate to an animal charity? Visit us today to find out more!',
        keyword: 'dog' 
    },
    { 
        id: 14, 
        title: 'Dog - Rotten Tomatoes', 
        link: 'https://www.rottentomatoes.com/m/dog_2022',
        description: 'DOG is a buddy comedy that follows the misadventures of two former Army Rangers paired against their will on the road trip of a lifetime.',
        keyword: 'dog' 
    },
    { 
        id: 15, 
        title: 'Dog Shelters - Animal Shelters', 
        link: 'https://www.streetvet.co.uk/?gclid=Cj0KCQjw8O-VBhCpARIsACMvVLMYIZh83NL4UNl-oPvCFNGOW4IYPaIHUVlSPkEieliYj0f7QLTBRIsaAg9SEALw_wcB',
        description: 'Essential veterinary care and services to the pets of people experiencing homelessness. Support our dedicated team of professional vets to care for homeless dogs. Donate today. Contact Us. Types: We are volunteers, Non-profit organisation, Covering 16 regions.',
        keyword: 'dog' 
    },
    { 
        id: 16, 
        title: 'All Dog Breeds - Complete List of Dog Profiles - DogTime', 
        link: 'https://dogtime.com/dog-breeds/profiles',
        description: 'Detailed profiles of more than 200 dog breeds. Includes personality, history, dog pictures, dog health info, and more.',
        keyword: 'dog' 
    },
    { 
        id: 17, 
        title: 'The 7 Types of Dog Breeds - The Spruce Pets', 
        link: 'https://www.thesprucepets.com/types-of-dog-breeds-4688776',
        description: 'The seven breed categories include dogs with a wide array of jobs, characteristics, and personalities that pet owners love.',
        keyword: 'dog' 
    },
    { 
        id: 18, 
        title: 'How To Look After a Dog - Dog Facts | RSPCA', 
        link: 'https://www.rspca.org.uk/adviceandwelfare/pets/dogs',
        description: 'Calling all dog lovers and owners! Check out our expert advice across a range of topics to help you take care of your dog and keep them healthy and happy.',
        keyword: 'dog' 
    },
    { 
        id: 19, 
        title: 'Guide Dogs UK Charity For The Blind And Partially Sighted', 
        link: 'https://www.guidedogs.org.uk/',
        description: 'Guide Dogs: Providing mobility for the blind and partially sighted. Supporting research, raising awareness and campaigning for the visually impaired.',
        keyword: 'dog' 
    },
    { 
        id: 20, 
        title: 'Dogs - Latest news updates, pictures, video, reaction', 
        link: 'https://www.mirror.co.uk/all-about/dogs',
        description: 'Dogs · Puppy with horrific skin condition \'yelped\' when rescuers tried to help him · Eleven puppies with umbilical cords still attached dumped in bin bag in woods.',
        keyword: 'dog' 
    },
    { 
        id: 21, 
        title: 'Bird Restaurant', 
        link: 'https://birdrestaurants.com/',
        description: 'BIRD is the original fried chicken and waffles, Best Burger in London, Best fried chicken in London, Halal Burger In London.',
        keyword: 'bird' 
    },
    { 
        id: 22, 
        title: 'Bird - Wikipedia', 
        link: 'https://en.wikipedia.org/wiki/Bird',
        description: 'Birds are a group of warm-blooded vertebrates constituting the class Aves /ˈeɪviːz/, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.',
        keyword: 'bird' 
    },
    { 
        id: 23, 
        title: 'Birds | London Wildlife Trust', 
        link: 'https://birdrestaurants.com/',
        description: 'Birds · Grebes and divers · Seabirds · Waterfowl · Herons, egrets, spoonbill and crane · Birds of prey · Grouse, partridges, pheasant and quail · Wading birds · Pigeons',
        keyword: 'bird' 
    },
    { 
        id: 24, 
        title: 'Birds A- Z | Bird Guides - The RSPB', 
        link: 'https://www.rspb.org.uk/birds-and-wildlife/wildlife-guides/bird-a-z/',
        description: 'Results 1 - 16 of 268 — Browse our UK bird guide by name. See birds alphabetised by name and family, A-Z in this handy guide.',
        keyword: 'bird' 
    },
    { 
        id: 25, 
        title: 'London Bird Report', 
        link: 'http://www.lnhs.org.uk/index.php/publications/london-bird-report',
        description: 'The London Bird Report is an annual publication for the London Bird Club at the LNHS. Each year, thousands of records collected from bird-watchers all over London are collated and published, alongside informative articles, written by expert birders from all walks of life.',
        keyword: 'bird' 
    },
    { 
        id: 26, 
        title: 'Bird & Bird | International Law Firm', 
        link: 'https://www.twobirds.com/',
        description: 'One Firm. Your Firm. We have advised clients from over 120 countries within the last year. .',
        keyword: 'bird' 
    },
    { 
        id: 27, 
        title: 'Birds - BirdLife International', 
        link: 'https://www.birdlife.org/birds/?gclid=Cj0KCQjw8O-VBhCpARIsACMvVLPkCfRRwNHOaIWzBjie6ksVf6qinlqqmnR0idLZGBJDVEpoZ3ZKdJwaAoOqEALw_wcB',
        description: 'Help to prevent bird extinction. Donate now or Join World Bird Club! World top bird experts. No1 Conservation Movement. Global nature partnership. IUCN Red List Authority.',
        keyword: 'bird' 
    },
    { 
        id: 28, 
        title: 'Bird College | Conservatoire of Dance and Musical Theatre', 
        link: 'https://birdcollege.co.uk/',
        description: 'Bird College\'s Joint Principals Shirley Coen and Luis De Abreu, are honoured to announce a new partnership with the TIRED Movement.',
        keyword: 'bird' 
    },
    { 
        id: 29, 
        title: 'Bird Pictures & Facts - National Geographic', 
        link: 'https://www.nationalgeographic.com/animals/birds',
        description: 'Birds are vertebrate animals adapted for flight. Many can also run, jump, swim, and dive. Some, like penguins, have lost the ability to fly but retained ...',
        keyword: 'bird' 
    },
    { 
        id: 30, 
        title: 'Larry Bird - Wikipedia', 
        link: 'https://en.wikipedia.org/wiki/Larry_Bird',
        description: 'Larry Joe Bird (born December 7, 1956) is an American former professional basketball player, coach and executive in the National Basketball Association (NBA)',
        keyword: 'bird' 
    },
]

module.exports = data
