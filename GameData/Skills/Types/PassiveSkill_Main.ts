export interface PassiveSkillMain {
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
    AddPal:                boolean;
    OverrideSummaryTextId: OverrideTextID;
    EffectValue1:          number;
    EffectValue3:          number;
    InvokeReserve:         boolean;
    EffectValue2:          number;
    AddRarePal:            boolean;
    AddMeleeWeapon:        boolean;
    InvokeActiveOtomo:     boolean;
    EffectType2:           EffectType2;
    EffectType1:           string;
    AddAccessory:          boolean;
    AddShotWeapon:         boolean;
    TargetType1:           TargetType1;
    TargetType2:           TargetType;
    TargetType3:           TargetType;
    InvokeWorker:          boolean;
    EffectType3:           EffectType3;
    InvokeRiding:          boolean;
    OverrideNameTextID:    OverrideTextID;
    Rank:                  number;
    OverrideDescMsgID:     string;
    AddArmor:              boolean;
    InvokeAlways:          boolean;
    InvokeInOtomo:         boolean;
}

export enum EffectType2 {
    EPalPassiveSkillEffectTypeCraftSpeed = "EPalPassiveSkillEffectType::CraftSpeed",
    EPalPassiveSkillEffectTypeDefense = "EPalPassiveSkillEffectType::Defense",
    EPalPassiveSkillEffectTypeMeleeAttack = "EPalPassiveSkillEffectType::MeleeAttack",
    EPalPassiveSkillEffectTypeNo = "EPalPassiveSkillEffectType::no",
    EPalPassiveSkillEffectTypeShotAttack = "EPalPassiveSkillEffectType::ShotAttack",
}

export enum EffectType3 {
    EPalPassiveSkillEffectTypeMoveSpeed = "EPalPassiveSkillEffectType::MoveSpeed",
    EPalPassiveSkillEffectTypeNo = "EPalPassiveSkillEffectType::no",
    EPalPassiveSkillEffectTypeShotAttack = "EPalPassiveSkillEffectType::ShotAttack",
}

export enum OverrideTextID {
    None = "None",
}

export enum TargetType1 {
    EPalPassiveSkillEffectTargetTypeToSelf = "EPalPassiveSkillEffectTargetType::ToSelf",
    EPalPassiveSkillEffectTargetTypeToSelfAndTrainer = "EPalPassiveSkillEffectTargetType::ToSelfAndTrainer",
    EPalPassiveSkillEffectTargetTypeToTrainer = "EPalPassiveSkillEffectTargetType::ToTrainer",
}

export enum TargetType {
    EPalPassiveSkillEffectTargetTypeNone = "EPalPassiveSkillEffectTargetType::None",
    EPalPassiveSkillEffectTargetTypeToSelf = "EPalPassiveSkillEffectTargetType::ToSelf",
}
