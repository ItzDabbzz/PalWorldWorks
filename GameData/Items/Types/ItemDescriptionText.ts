export interface ItemDescriptionText {
    Type:       string;
    Class:      string;
    Properties: Properties;
    Name:       Name;
    Rows:       { [key: string]: Row };
}

export enum Name {
    DTItemDescriptionText = "DT_ItemDescriptionText",
}

export interface Properties {
    RowStruct: RowStruct;
}

export interface RowStruct {
    ObjectPath: string;
    ObjectName: string;
}

export interface Row {
    TextData: TextData;
}

export interface TextData {
    SourceString:    string;
    LocalizedString: string;
    Namespace:       Name;
    Key:             string;
}
