export interface PalNameText {
    Type:       string;
    Class:      string;
    Properties: Properties;
    Name:       Name;
    Rows:       { [key: string]: Row };
}

export enum Name {
    DTPalNameText = "DT_PalNameText",
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
