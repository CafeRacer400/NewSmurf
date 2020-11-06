# AutoSmurf
Here a script which try to level and rush your characters, starting from nothing.
It should works with any class, assuming you've got at least one sorc in the team to teleport (teleportsorc) and one barb to bo (boer).
It's made to be use *with* AutoBuild

1. Copy all download-files into its correct directories ( maybe you need to copy your original files). 
e.g. you need to copy the /common/config.js to /common/ directory and cover the config.js.

2. Copy your bot char-config file and rename the XXXX1 into your char name in /config/ directory.
 e.g. if your bot char is a sor and char name is ABC, you must copy /config/Sorceress.XXXX1.js into Sorceress.ABC.js, 
 and other chars are same as the sor char. If your bot team includes more than one sor, except from renaming the file name 
 you must set Config.PublicMode = 2 which locates on the 497th line in Sorceress.XXXX.js. 
 
3. About on 360th line in char-config file, you must build your bot according to your building-template.
e.g. if your bot char is a blizzard sor, you can set Config.AutoBuild.Template = "Blizzard", 
because the Blizzard sor building file is in the config/builds directory.
And Other building files are prepeared which are Meteror-sor, ChainLightening-sor, BlessHammer-pal and Bo-barbarian.
Of course, if you don't like the building-file you can make building-file yourself.

4. The pickit file may be not suitable for you so that you can change it according to your mind. 
But I holp you keep the sell.nip and white1.nip which can help your bot to earn more money and build some runewords

5. The char config file sets that your bot doesn't use the Merc because the hiring Merc is expensive for your bot in the beginner stage.
If you want to use Mercs, you should set Config.UseMerc = true which locates on the 230th line in the char-config file. 
When your bot team already enters into Nightmare difficulty and it's lvl is more than 50, I hope you manually equip your bot and hire a merc,
and meanwhile you should set Config.UseMerc = true

6. When your bot team completed Rite of Passage in Nightmare and Hell, the AutoSmurf was transfered into MF mode. But killing baal
was restricted by charLvls which  are baalLvlnm and mfLvlHell.

7. When your bot team Lvl reaches baalLvlnm, the AutoSmurf will enter into Hell difficulty and you should use XXXX2 char-config
file so that you must write your char name in XXXX2 same as XXXX1. In XXXX2, Config.AutoEquip = false is default. That means your bot
 will be equiped manually by yourself since this time. 

8. You may reset the volues of line 16-30 in AutoSmurf.js. These volues restrict your bot level to begin its Quest. e.g. "tombsLvl = 30" (line 30) means
that your bot level must be more than 28 and your bot can begin to kill durial. Because the bot beginner only equips low quality items, 
if you want to reduce times of chickening, suggestion is not changing the default volues. The fact is that the default volues will keep your bot safety
but level-up speed is slow.

9. You must give each char 1000 gold or a town-tome when first running the AutoSmurf.

 Happy Smurfing!*