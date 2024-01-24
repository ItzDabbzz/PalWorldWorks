export interface PalDropItem {
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
    Rate1:       number;
    Rate3:       number;
    Rate2:       number;
    Rate5:       number;
    Rate4:       number;
    CharacterID: string;
    Max1:        number;
    Max2:        number;
    Max3:        number;
    min1:        number;
    min5:        number;
    min4:        number;
    min3:        number;
    min2:        number;
    Max4:        number;
    Max5:        number;
    ItemId1:     string;
    Level:       number;
    ItemId4:     string;
    ItemId5:     string;
    ItemId2:     string;
    ItemId3:     string;
}
