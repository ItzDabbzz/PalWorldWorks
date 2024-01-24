export interface PalMonsterData {
    Type:       string;
    Class:      string;
    Properties: Properties;
    Name:       string;
    Rows:       { [key: string]: Row };
}

export interface Properties {
    RowStruct: RowStruct;
}

export interface RowStruct {
    ObjectPath: string;
    ObjectName: string;
}

export interface Row {
    PassiveSkill1:                       AISightResponse;
    Support:                             number;
    OverridePartnerSkillTextID:          string;
    Size:                                Size;
    FoodAmount:                          number;
    HP:                                  number;
    CombiRank:                           number;
    NooseTrap:                           boolean;
    BPClass:                             string;
    AISightResponse:                     AISightResponse;
    BattleBGM:                           BattleBGM;
    PassiveSkill2:                       PassiveSkill2;
    PassiveSkill3:                       AISightResponse;
    PassiveSkill4:                       AISightResponse;
    SlowWalkSpeed:                       number;
    ShotAttack:                          number;
    Nocturnal:                           boolean;
    WorkSuitability_Deforest:            number;
    WorkSuitability_GenerateElectricity: number;
    WorkSuitability_Cool:                number;
    ZukanIndexSuffix:                    ZukanIndexSuffix;
    WorkSuitability_Mining:              number;
    OverrideNameTextID:                  string;
    WorkSuitability_Collection:          number;
    MaleProbability:                     number;
    GenusCategory:                       GenusCategory;
    Rarity:                              number;
    WorkSuitability_MonsterFarm:         number;
    ElementType1:                        ElementType;
    AIResponse:                          AIResponse;
    ElementType2:                        ElementType;
    Price:                               number;
    WorkSuitability_Transport:           number;
    WorkSuitability_EmitFlame:           number;
    TransportSpeed:                      number;
    WorkSuitability_Handcraft:           number;
    FullStomachDecreaseRate:             number;
    IgnoreBlowAway:                      boolean;
    ViewingAngle:                        number;
    Organization:                        Organization;
    WorkSuitability_Seeding:             number;
    RunSpeed:                            number;
    MaxFullStomach:                      number;
    IsPal:                               boolean;
    WorkSuitability_OilExtraction:       number;
    CaptureRateCorrect:                  number;
    WalkSpeed:                           number;
    CraftSpeed:                          number;
    weapon:                              Weapon;
    IsBoss:                              boolean;
    RideSprintSpeed:                     number;
    ZukanIndex:                          number;
    Tribe:                               string;
    WorkSuitability_ProductMedicine:     number;
    NamePrefixID:                        string;
    HearingRate:                         number;
    Edible:                              boolean;
    WorkSuitability_Watering:            number;
    ExpRatio:                            number;
    EnemyReceiveDamageRate:              number;
    MeleeAttack:                         number;
    Defense:                             number;
    Stamina:                             number;
    ViewingDistance:                     number;
    IgnoreLeanBack:                      boolean;
    WeaponEquip:                         boolean;
    BiologicalGrade:                     number;
    Predator:                            boolean;
    IsTowerBoss:                         boolean;
}

export enum AIResponse {
    Boss = "Boss",
    Escape = "Escape",
    EscapeToBattle = "Escape_to_Battle",
    Friendly = "Friendly",
    NotInterested = "NotInterested",
    Warlike = "Warlike",
}

export enum AISightResponse {
    DeffenceUp1 = "Deffence_up1",
    ElementBoostAqua2_PAL = "ElementBoost_Aqua_2_PAL",
    ElementBoostEarth2_PAL = "ElementBoost_Earth_2_PAL",
    ElementBoostFire2_PAL = "ElementBoost_Fire_2_PAL",
    ElementBoostLeaf2_PAL = "ElementBoost_Leaf_2_PAL",
    ElementBoostThunder2_PAL = "ElementBoost_Thunder_2_PAL",
    ElementResistNormal1_PAL = "ElementResist_Normal_1_PAL",
    Legend = "Legend",
    None = "None",
    PALALLAttackDown1 = "PAL_ALLAttack_down1",
    PALFullStomachUp1 = "PAL_FullStomach_Up_1",
    PALRude = "PAL_rude",
}

export enum BattleBGM {
    EPalBattleBGMTypeCool = "EPalBattleBGMType::Cool",
    EPalBattleBGMTypeCute = "EPalBattleBGMType::Cute",
    EPalBattleBGMTypeFieldBoss = "EPalBattleBGMType::FieldBoss",
    EPalBattleBGMTypeLegend = "EPalBattleBGMType::Legend",
    EPalBattleBGMTypeStrong = "EPalBattleBGMType::Strong",
    EPalBattleBGMTypeTowerBoss = "EPalBattleBGMType::TowerBoss",
}

export enum ElementType {
    EPalElementTypeDark = "EPalElementType::Dark",
    EPalElementTypeDragon = "EPalElementType::Dragon",
    EPalElementTypeEarth = "EPalElementType::Earth",
    EPalElementTypeElectricity = "EPalElementType::Electricity",
    EPalElementTypeFire = "EPalElementType::Fire",
    EPalElementTypeIce = "EPalElementType::Ice",
    EPalElementTypeLeaf = "EPalElementType::Leaf",
    EPalElementTypeNone = "EPalElementType::None",
    EPalElementTypeNormal = "EPalElementType::Normal",
    EPalElementTypeWater = "EPalElementType::Water",
}

export enum GenusCategory {
    EPalGenusCategoryTypeBird = "EPalGenusCategoryType::Bird",
    EPalGenusCategoryTypeDragon = "EPalGenusCategoryType::Dragon",
    EPalGenusCategoryTypeFish = "EPalGenusCategoryType::Fish",
    EPalGenusCategoryTypeFourLegged = "EPalGenusCategoryType::FourLegged",
    EPalGenusCategoryTypeHumanoid = "EPalGenusCategoryType::Humanoid",
    EPalGenusCategoryTypeMonster = "EPalGenusCategoryType::Monster",
    EPalGenusCategoryTypeOther = "EPalGenusCategoryType::Other",
}

export enum Organization {
    EPalOrganizationTypeNone = "EPalOrganizationType::None",
}

export enum PassiveSkill2 {
    ElementBoostDark2_PAL = "ElementBoost_Dark_2_PAL",
    ElementBoostDragon2_PAL = "ElementBoost_Dragon_2_PAL",
    ElementBoostIce2_PAL = "ElementBoost_Ice_2_PAL",
    ElementBoostNormal2_PAL = "ElementBoost_Normal_2_PAL",
    None = "None",
}

export enum Size {
    EPalSizeTypeL = "EPalSizeType::L",
    EPalSizeTypeM = "EPalSizeType::M",
    EPalSizeTypeS = "EPalSizeType::S",
    EPalSizeTypeXL = "EPalSizeType::XL",
    EPalSizeTypeXS = "EPalSizeType::XS",
}

export enum ZukanIndexSuffix {
    B = "B",
    Empty = "",
}

export enum Weapon {
    EPalWeaponTypeNone = "EPalWeaponType::None",
}
