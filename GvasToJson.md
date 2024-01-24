# GvasToJson For PalWorld By: [localcc](https://github.com/localcc)  

## ❗ Doesn't Re-Serialize Worlds (aka Level.sav) Correctly❗

This gvas2json/json2gvas version allows you to edit Level.sav and player files. This version also includes support for parsing RawData, which allows you to edit:

- Player usernames
- Player health
- Player stats
- and more!

[---\[ Download Here \]---](https://cdn.discordapp.com/attachments/1196354583040118824/1199127284498579487/gvas2json.zip?ex=65c1694f&is=65aef44f&hm=91c64dc02cf4fc352d1276ed8d6c51474e63c115cc8a02e309780f55aa6c0977&)

### Usage
To use, just drag&drop your `.sav` file onto `gvas2json.bat`, after some time you will see a `.json` file appear with the same name in the directory of the `.sav` file, now it's time to do your edits!

To serialize back, just drag&drop the .json file onto `json2gvas.bat`, and a `.sav` file with the same name will be created!

### Note
Player usernames, health, and other stats are stored inside of Level.sav, not individual player files, as strange as it might seem

### Note2
The files you open might be HUGE, so make sure to open them in Visual Studio Code, or a jetbrains IDE

### Credits
- [localcc](https://github.com/localcc) - gvas file parsing library, rawdata parsing
- [Scott Anderson](https://github.com/scottanderson) - gvas2json/json2gvas cli interface for the library which I modified, gvas library contributions
- @Pryxo - for writing the bat files (THANK YOU A LOT I HATE THEM) 