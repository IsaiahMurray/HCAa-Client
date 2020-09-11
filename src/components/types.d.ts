// interface Lists{
//     lists: List[]
// }

interface List{
    title: string,
    description: string,
    tasks?: [Task],
    id?: number
}
interface Task{
    description: string,
    complete: boolean,
    id: number
}

interface Monster{
    id: number | null,
    name: string,
    type: string,
    species: string,
    description: string,
    elements: string[],
    ailments: Ailments[],
    locations: Locations[],
    resistances: MonsterResistance[],
    weaknesses: MonsterWeakness[],
    rewards: MonsterReward[]
}
interface Ailments{
    id: number,
    name: string,
    description: string,
    recovery: Recovery,
    protection: Protection
}

interface Recovery {
    actions: RecoveryAction[],
    items: Item[]
}
interface Protection{
    items: Item[],
    skills: Skill[]
}

interface RecoveryAction{
    items: Item[],
    skills: Skill[]
}

interface Skill{
    id: number,
    slug: string,
    name: string,
    description: string,
    ranks: SkillRank[]
}

interface Locations{
    id: number,
    name: string,
    zoneCount: number,
    camps: any
}
 interface MonsterResistance{
     element: string,
     condition: string
 }

 interface MonsterWeakness{
     element: string,
     stars: number,
     condition: string
 }

 interface MonsterReward{
     id: number,
     item: Item,
     conditions: RewardCondition[]
 }

 interface RewardCondition{
     type: string,
     subtype: string,
     rank: string,
     quantity: number,
     chance: number
 }

 interface Item{
     id: number,
     name: string,
     description: string,
     rarity: number,
     carryLimit: number,
     value: number
 }

 interface ElementType{
     name: string
 }