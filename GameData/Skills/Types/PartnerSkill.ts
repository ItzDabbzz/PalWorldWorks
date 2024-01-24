export interface PartnerSkill {
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
    CoolDownTime:    number;
    IsToggleKey:     boolean;
    DevName:         string;
    ExecCost:        number;
    CanThrowPal:     boolean;
    CanChangeWeapon: boolean;
    effectTime:      number;
    IdleCost:        number;
}
