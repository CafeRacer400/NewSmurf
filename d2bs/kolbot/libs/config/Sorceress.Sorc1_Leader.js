// Sorceress config file

/* Brief instructions:
 * Notepad++ is HIGHLY recommended to use for editing these files. Visit http://notepad-plus-plus.org/
 * To comment out something, put // in front of that line
 * !!!Never comment out something you're not sure about, set it to false or disable as noted in description if you don't want to use it.
 * true and false are case sensitive. Good: Config.SomeVar = true; Bad: Config.SomeVar = True;
 */

function LoadConfig() {
	/* Sequence config
	 * Set to true if you want to run it, set to false if not.
	 * If you want to change the order of the scripts, just change the order of their lines by using cut and paste.
	 */

	Scripts.AutoSmurf = true;
		Config.AutoSmurf.TeamSize = 6;
		Config.AutoSmurf.TeleportingSorc = "eca"; // your leader sorceress charname.
		Config.AutoSmurf.BoBarb = "ecbo"; // boBarb charname
		Config.AutoSmurf.OtherChars = ["ecb","ec-c","ecd","ec-e"]; // all team charnames, excluding the leader and boBarb
		Config.AutoSmurf.AllTeamProfiles = ["A1","A2","A3","A4","A5","A6"]; // the whole team PROFILE names

	Config.AutoEquip = true;
	Config.LowGold = 30000;

	// Team MF system
	Config.MFLeader = false; // Set to true if you have one or more MFHelpers. Opens TP and gives commands when doing normal MF runs.

	// Boss/area scripts

	// *** act 1 ***
	Scripts.Corpsefire = false;
		Config.Corpsefire.ClearDen = false;
	Scripts.Mausoleum = false;
		Config.Mausoleum.KillBloodRaven = false;
		Config.Mausoleum.ClearCrypt = false;
	Scripts.Rakanishu = false;
		Config.Rakanishu.KillGriswold = true;
	Scripts.UndergroundPassage = false;
	Scripts.Coldcrow = false;
	Scripts.Tristram = false;
		Config.Tristram.WalkClear = false; // Disable teleport while clearing to protect leechers
		Config.Tristram.PortalLeech = false; // Set to true to open a portal for leechers.
	Scripts.Pit = false;
		Config.Pit.ClearPit1 = true;
	Scripts.Treehead = false;
	Scripts.Smith = false;
	Scripts.BoneAsh = false;
	Scripts.Countess = false;
		Config.Countess.KillGhosts = false;
	Scripts.Andariel = false;
	Scripts.Cows = false;

	// *** act 2 ***
	Scripts.Radament = false;
	Scripts.Coldworm = false;
		Config.Coldworm.KillBeetleburst = false;
		Config.Coldworm.ClearMaggotLair = false; // Clear all 3 levels
	Scripts.AncientTunnels = false;
		Config.AncientTunnels.OpenChest = false; // Open special chest in Lost City
		Config.AncientTunnels.KillDarkElder = false;
	Scripts.Summoner = false;
		Config.Summoner.FireEye = false;
	Scripts.Tombs = false;
	Scripts.Duriel = false;

	// *** act 3 ***
	Scripts.Stormtree = false;
	Scripts.KurastTemples = false;
	Scripts.Icehawk = false;
	Scripts.Endugu = false;
	Scripts.Travincal = false;
		Config.Travincal.PortalLeech = false; // Set to true to open a portal for leechers.
	Scripts.Mephisto = false;
		Config.Mephisto.MoatTrick = false;
		Config.Mephisto.KillCouncil = false;
		Config.Mephisto.TakeRedPortal = false;

	// *** act 4 ***
	Scripts.OuterSteppes = false;
	Scripts.Izual = false;
	Scripts.Hephasto = false;
	Scripts.Vizier = false; // Intended for classic sorc, kills Vizier only.
	Scripts.FastDiablo = false;
	Scripts.Diablo = false;
		Config.Diablo.WalkClear = true; // Disable teleport while clearing to protect leechers
		Config.Diablo.Entrance = true; // Start from entrance
		Config.Diablo.SealWarning = "Leave the seals alone!";
		Config.Diablo.EntranceTP = "Entrance TP up";
		Config.Diablo.StarTP = "Star TP up";
		Config.Diablo.DiabloMsg = "Diablo";
		Config.Diablo.SealOrder = ["vizier", "seis", "infector"]; // the order in which to clear the seals. If seals are excluded, they won't be checked unless diablo fails to appear
	Scripts.SealLeader = false; // Clear a safe spot around seals and invite leechers in. Leechers should run SealLeecher script. Don't run with Diablo or FastDiablo.

	// *** act 5 ***
	Scripts.Pindleskin = false;
		Config.Pindleskin.UseWaypoint = false;
		Config.Pindleskin.KillNihlathak = false;
		Config.Pindleskin.ViperQuit = false; // End script if Tomb Vipers are found.
	Scripts.Nihlathak = false;
		Config.Nihlathak.ViperQuit = false; // End script if Tomb Vipers are found.
	Scripts.Eldritch = false;
		Config.Eldritch.OpenChest = false;
		Config.Eldritch.KillShenk = true;
		Config.Eldritch.KillDacFarren = false;
	Scripts.Eyeback = false;
	Scripts.SharpTooth = false;
	Scripts.ThreshSocket = false;
	Scripts.Abaddon = false;
	Scripts.Frozenstein = false;
		Config.Frozenstein.ClearFrozenRiver = true;
	Scripts.Bonesaw = false;
		Config.Bonesaw.ClearDrifterCavern = false;
	Scripts.Snapchip = false;
		Config.Snapchip.ClearIcyCellar = true;
	Scripts.Worldstone = false;
	Scripts.Baal = false;
		Config.Baal.HotTPMessage = "Hot TP!";
		Config.Baal.SafeTPMessage = "Safe TP!";
		Config.Baal.BaalMessage = "Baal!";
		Config.Baal.SoulQuit = false; // End script if Souls (Burning Souls) are found.
		Config.Baal.DollQuit = false; // End script if Dolls (Undead Soul Killers) are found.
		Config.Baal.KillBaal = true; // Kill Baal. Leaves game after wave 5 if false.

	// Leeching section
	Config.Leader = ""; // Leader's ingame character name. Leave blank to try auto-detection (works in AutoBaal, Wakka, MFHelper)
	Config.QuitList = ["A1","A3","A4","A5","A6"]; // List of character names to quit with. Example: Config.QuitList = ["MySorc", "MyDin"];
	Config.QuitListMode = 1; // 0 = use character names; 1 = use profile names (all profiles must run on the same computer).
	Config.QuitListDelay = [1, 2]; // Quit the game with random delay in case of using Config.QuitList. Example: Config.QuitListDelay = [1, 10]; will exit with random delay between 1 and 10 seconds.

	// Town settings
	Config.HealHP = 90; // Go to a healer if under designated percent of life.
	Config.HealMP = 70; // Go to a healer if under designated percent of mana.
	Config.HealStatus = true; // Go to a healer if poisoned or cursed
	Config.UseMerc = false; // Use merc. This is ignored and always false in d2classic.
	Config.MercWatch = false; // Instant merc revive during battle.

	// Potion settings
	Config.UseHP = 85; // Drink a healing potion if life is under designated percent.
	Config.UseRejuvHP = 50; // Drink a rejuvenation potion if life is under designated percent.
	Config.UseMP = 30; // Drink a mana potion if mana is under designated percent.
	Config.UseRejuvMP = 1; // Drink a rejuvenation potion if mana is under designated percent.
	Config.UseMercHP = 40; // Give a healing potion to your merc if his/her life is under designated percent.
	Config.UseMercRejuv = 0; // Give a rejuvenation potion to your merc if his/her life is under designated percent.
	Config.HPBuffer = 2; // Number of healing potions to keep in inventory.
	Config.MPBuffer = 8; // Number of mana potions to keep in inventory.
	Config.RejuvBuffer = 2; // Number of rejuvenation potions to keep in inventory.

	// Chicken settings
	Config.LifeChicken = 42; // Exit game if life is less or equal to designated percent.
	Config.ManaChicken = 0; // Exit game if mana is less or equal to designated percent.
	Config.MercChicken = 0; // Exit game if merc's life is less or equal to designated percent.
	Config.TownHP = 60; // Go to town if life is under designated percent.
	Config.TownMP = 0; // Go to town if mana is under designated percent.

	/* Inventory lock configuration. !!!READ CAREFULLY!!!
	 * 0 = item is locked and won't be moved. If item occupies more than one slot, ALL of those slots must be set to 0 to lock it in place.
	 * Put 0s where your torch, annihilus and everything else you want to KEEP is.
	 * 1 = item is unlocked and will be dropped, stashed or sold.
	 * If you don't change the default values, the bot won't stash items.
	 */
	Config.Inventory[0] = [1,1,1,1,1,1,1,1,1,1];
	Config.Inventory[1] = [1,1,1,1,1,1,1,1,1,1];
	Config.Inventory[2] = [1,1,1,1,1,1,1,1,1,1];
	Config.Inventory[3] = [1,1,1,1,1,1,1,1,1,1];

	Config.StashGold = 1000; // Minimum amount of gold to stash.

	/* Potion types for belt columns from left to right.
	 * Rejuvenation potions must always be rightmost.
	 * Supported potions - Healing ("hp"), Mana ("mp") and Rejuvenation ("rv")
	 */
	Config.BeltColumn[0] = "hp";
	Config.BeltColumn[1] = "hp";
	Config.BeltColumn[2] = "mp";
	Config.BeltColumn[3] = "mp";

	/* Minimum amount of potions. If we have less, go to vendor to purchase more.
	 * Set rejuvenation columns to 0, because they can't be bought.
	 */
	Config.MinColumn[0] = 3;
	Config.MinColumn[1] = 3;
	Config.MinColumn[2] = 3;
	Config.MinColumn[3] = 3;

	// Pickit config. Default folder is kolbot/pickit.
	//-----usual-------- 
	Config.PickitFiles.push("autosmurf/sell.nip");
	Config.PickitFiles.push("autosmurf/merc.nip");
	//-----special--------
	Config.PickitFiles.push("autosmurf/sorceress.soni.nip");
	Config.PickitFiles.push("autosmurf/Start_Pickit_Soni.nip");
	Config.PickRange = 40; // Pick radius
	Config.FastPick = false; // Check and pick items between attacks

	/* Advanced automule settings
	 * Trigger - Having an item that is on the list will initiate muling. Useful if you want to mule something immediately upon finding.
	 * Force - Items listed here will be muled even if they are ingredients for cubing.
	 * Exclude - Items listed here will be ignored and will not be muled. Items on Trigger or Force lists are prioritized over this list.
	 *
	 * List can either be set as string in pickit format and/or as number referring to item classids. Each entries are separated by commas.
	 * Example :
	 *  Config.AutoMule.Trigger = [639, 640, "[type] == ring && [quality] == unique # [maxmana] == 20"];
	 *  	This will initiate muling when your character finds Ber, Jah, or SOJ.
	 *  Config.AutoMule.Force = [561, 566, 571, 576, 581, 586, 601];
	 *  	This will mule perfect gems/skull during muling.
	 *  Config.AutoMule.Exclude = ["[name] >= talrune && [name] <= solrune", "[name] >= 654 && [name] <= 657"];
	 *  	This will exclude muling of runes from tal through sol, and any essences.
	 */
	Config.AutoMule.Trigger = [];
	Config.AutoMule.Force = [];
	Config.AutoMule.Exclude = [];

	// Additional item info log settings. All info goes to \logs\ItemLog.txt
	Config.ItemInfo = false; // Log stashed, skipped (due to no space) or sold items.
	Config.ItemInfoQuality = []; // The quality of sold items to log. See NTItemAlias.dbl for values. Example: Config.ItemInfoQuality = [6, 7, 8];

	// Item identification settings
	Config.CainID.Enable = false; // Identify items at Cain
	Config.CainID.MinGold = 2500000; // Minimum gold (stash + character) to have in order to use Cain.
	Config.CainID.MinUnids = 3; // Minimum number of unid items in order to use Cain.
	Config.FieldID = false; // Identify items in the field instead of going to town.
	Config.DroppedItemsAnnounce.Enable = false;	// Announce Dropped Items to in-game newbs
	Config.DroppedItemsAnnounce.Quality = []; // Quality of item to announce. See NTItemAlias.dbl for values. Example: Config.DroppedItemsAnnounce.Quality = [6, 7, 8];

	// Manager Item Log Screen
	Config.LogKeys = false; // Log keys on item viewer
	Config.LogOrgans = true; // Log organs on item viewer
	Config.LogLowRunes = true; // Log low runes (El - Dol) on item viewer
	Config.LogMiddleRunes = true; // Log middle runes (Hel - Mal) on item viewer
	Config.LogHighRunes = true; // Log high runes (Ist - Zod) on item viewer
	Config.LogLowGems = false; // Log low gems (chipped, flawed, normal) on item viewer
	Config.LogHighGems = false; // Log high gems (flawless, perfect) on item viewer
	Config.SkipLogging = []; // Custom log skip list. Set as three digit item code or classid. Example: ["tes", "ceh", 656, 657] will ignore logging of essences.
	Config.ShowCubingInfo = true; // Show cubing messages on console

	// Repair settings
	Config.CubeRepair = false; // Repair weapons with Ort and armor with Ral rune. Don't use it if you don't understand the risk of losing items.
	Config.RepairPercent = 70; // Durability percent of any equipped item that will trigger repairs.

	// Gambling config
	Config.Gamble = false;
	Config.GambleGoldStart = 3000000;
	Config.GambleGoldStop = 500000;

	// List of item names or classids for gambling. Check libs/NTItemAlias.dbl file for other item classids.
	//Config.GambleItems.push(520); // Amulet
	//Config.GambleItems.push(522); // Ring
	Config.GambleItems.push(418); // Circlet
	Config.GambleItems.push(419); // Coronet

	/* Cubing config. All recipe names are available in Templates/Cubing.txt. For item names/classids check NTItemAlias.dbl
	 * The format is Config.Recipes.push([recipe_name, item_name_or_classid, etherealness]). Etherealness is optional and only applies to some recipes.
	 */
	Config.Cubing = false; // Set to true to enable cubing.

	// Ingredients for the following recipes will be auto-picked, for classids check libs/NTItemAlias.dbl
	//Config.Recipes.push([Recipe.Gem, "Amethyst"]); // Make Flawless Amethyst
	//Config.Recipes.push([Recipe.Gem, "Ruby"]); // Make Flawless Ruby
	
	Config.Recipes.push([Recipe.Gem, "Flawless Amethyst"]); // Make Perfect Amethyst
	Config.Recipes.push([Recipe.Gem, "Flawless Topaz"]); // Make Perfect Topaz
	//Config.Recipes.push([Recipe.Gem, "Flawless Sapphire"]); // Make Perfect Sapphire
	//Config.Recipes.push([Recipe.Gem, "Flawless Emerald"]); // Make Perfect Emerald
	Config.Recipes.push([Recipe.Gem, "Flawless Ruby"]); // Make Perfect Ruby
	Config.Recipes.push([Recipe.Gem, "Flawless Diamond"]); // Make Perfect Diamond
	//Config.Recipes.push([Recipe.Gem, "Flawless Skull"]); // Make Perfect Skull

	//Config.Recipes.push([Recipe.Token]); // Make Token of Absolution

	//Config.Recipes.push([Recipe.Rune, "Pul Rune"]); // Upgrade Pul to Um
	//Config.Recipes.push([Recipe.Rune, "Um Rune"]); // Upgrade Um to Mal
	//Config.Recipes.push([Recipe.Rune, "Mal Rune"]); // Upgrade Mal to Ist
	//Config.Recipes.push([Recipe.Rune, "Ist Rune"]); // Upgrade Ist to Gul
	//Config.Recipes.push([Recipe.Rune, "Gul Rune"]); // Upgrade Gul to Vex

	//Config.Recipes.push([Recipe.Caster.Belt, "Sharkskinbelt"]); // Craft Mana-FCR Belt
	//Config.Recipes.push([Recipe.Caster.Boots, "Demonhideboots"]); // Craft Mana Boots											 
	//Config.Recipes.push([Recipe.Caster.Amulet]); // Craft Caster Amulet
	//Config.Recipes.push([Recipe.Caster.Ring]); // Craft Caster Ring													
	//Config.Recipes.push([Recipe.Blood.Ring]); // Craft Blood Ring
	//Config.Recipes.push([Recipe.Blood.Amulet]); // Craft Blood Amulet
	//Config.Recipes.push([Recipe.Blood.Belt, "Belt"]); // Craft Blood Belt
	//Config.Recipes.push([Recipe.Blood.Belt, "Meshbelt"]); // Craft Blood Mesh Belt
	//Config.Recipes.push([Recipe.Blood.Helm, "Armet"]); // Craft Blood Armet
	//Config.Recipes.push([Recipe.Blood.Gloves, "Heavygloves"]); // Craft Blood Heavy Gloves
	//Config.Recipes.push([Recipe.Blood.Gloves, "Sharkskingloves"]); // Craft Blood Heavy Gloves

	// The gems not used by other recipes will be used for magic item rerolling.

	//Config.Recipes.push([Recipe.Reroll.Magic, 421]); // Reroll magic Diadem
	//Config.Recipes.push([Recipe.Reroll.Magic, 605]); // Reroll magic Grand Charm (ilvl 91+)

	//Config.Recipes.push([Recipe.Reroll.Rare, 421]); // Reroll rare Diadem

	/* Base item for the following recipes must be in pickit. The rest of the ingredients will be auto-picked.
	 * Use Roll.Eth, Roll.NonEth or Roll.All to determine what kind of base item to roll - ethereal, non-ethereal or all.
	 */
	Config.Recipes.push([Recipe.Socket.Weapon, "Thresher", Roll.Eth]); // Socket ethereal Thresher
	Config.Recipes.push([Recipe.Socket.Weapon, "Colossus Voulge", Roll.Eth]); // Socket ethereal CV
	Config.Recipes.push([Recipe.Socket.Weapon, "Cryptic Axe", Roll.Eth]); // Socket ethereal Cryptic Axe
	Config.Recipes.push([Recipe.Socket.Weapon, "Great Poleaxe", Roll.Eth]); // Socket ethereal Great Poleaxe
	Config.Recipes.push([Recipe.Socket.Weapon, "Giant Thresher", Roll.Eth]); // Socket ethereal Giant Tresher
	
	Config.Recipes.push([Recipe.Socket.Armor, "Dusk Shroud", Roll.Eth]); // Socket ethereal Dusk Shroud
	Config.Recipes.push([Recipe.Socket.Armor, "Wyrmhide", Roll.Eth]); // Socket ethereal Wyrmhide
	Config.Recipes.push([Recipe.Socket.Armor, "Scarab Husk", Roll.Eth]); // Socket ethereal Scarab Husk
	Config.Recipes.push([Recipe.Socket.Armor, "Wire Fleece", Roll.Eth]); // Socket ethereal Wire Fleece
	Config.Recipes.push([Recipe.Socket.Armor, "Diamond Mail", Roll.Eth]); // Socket ethereal Diamond Mail
	Config.Recipes.push([Recipe.Socket.Armor, "Loricated Mail", Roll.Eth]); // Socket ethereal Loricated Mail
	Config.Recipes.push([Recipe.Socket.Armor, "Boneweave", Roll.Eth]); // Socket ethereal Boneweave
	Config.Recipes.push([Recipe.Socket.Armor, "Great Hauberk", Roll.Eth]); // Socket ethereal Great Hauberk
	Config.Recipes.push([Recipe.Socket.Armor, "Balrog Skin", Roll.Eth]); // Socket ethereal Balrog Skin
	Config.Recipes.push([Recipe.Socket.Armor, "Krakenshell", Roll.Eth]); // Socket ethereal Krakenshell
	Config.Recipes.push([Recipe.Socket.Armor, "Lacquered Plate", Roll.Eth]); // Socket ethereal Lacquered Plate
	Config.Recipes.push([Recipe.Socket.Armor, "Shadow Plate", Roll.Eth]); // Socket ethereal Shadow Plate
	Config.Recipes.push([Recipe.Socket.Armor, "Sacred Armor", Roll.Eth]); // Socket ethereal Sacred Armor
	Config.Recipes.push([Recipe.Socket.Armor, "Archon Plate", Roll.Eth]); // Socket ethereal Archon Plate

	//Config.Recipes.push([Recipe.Unique.Armor.ToExceptional, 335, Roll.NonEth]); // Upgrade Bloodfist to Exceptional
	//Config.Recipes.push([Recipe.Unique.Armor.ToExceptional, 337, Roll.NonEth]); // Upgrade Magefist to Exceptional
	//Config.Recipes.push([Recipe.Unique.Armor.ToElite, 381, Roll.NonEth]); // Upgrade Bloodfist or Grave Palm to Elite
	//Config.Recipes.push([Recipe.Unique.Armor.ToElite, 383, Roll.NonEth]); // Upgrade Magefist or Lavagout to Elite
	//Config.Recipes.push([Recipe.Unique.Armor.ToElite, 389, Roll.NonEth]); // Upgrade Gore Rider to Elite
	/* Runeword config. All recipes are available in Templates/Runewords.txt
	 * Keep lines follow pickit format and any given runeword is tested vs ALL lines so you don't need to repeat them
	 */
	Config.MakeRunewords = false; // Set to true to enable runeword making/rerolling

	//insight
	Config.Runewords.push([Runeword.Insight, "poleaxe"]);
	Config.Runewords.push([Runeword.Insight, "halberd"]);
	Config.Runewords.push([Runeword.Insight, "bill"]);
	Config.Runewords.push([Runeword.Insight, "battlescythe"]);
	Config.Runewords.push([Runeword.Insight, "partizan"]);
	Config.Runewords.push([Runeword.Insight, "becdecorbin"]);
	Config.Runewords.push([Runeword.Insight, "thresher"]);
	Config.Runewords.push([Runeword.Insight, "crypticaxe"]);
	Config.Runewords.push([Runeword.Insight, "greatpoleaxe"]);
	Config.Runewords.push([Runeword.Insight, "colossusvoulge"]);
	Config.KeepRunewords.push("[type] == polearm # [meditationaura] <= 17");

	//Stealth
	Config.Runewords.push([Runeword.Stealth, "hardleatherarmor"]);
	Config.Runewords.push([Runeword.Stealth, "leatherarmor"]);
	Config.Runewords.push([Runeword.Stealth, "quiltedarmor"]);
	Config.Runewords.push([Runeword.Stealth, "breastplate"]);
	Config.KeepRunewords.push("[type] == armor # [fcr] == 25");

	//smoke
	Config.Runewords.push([Runeword.Smoke, "lightplate"]);
	Config.Runewords.push([Runeword.Smoke, "ghostarmor"]);
	Config.Runewords.push([Runeword.Smoke, "serpentskinarmor"]);
	Config.Runewords.push([Runeword.Smoke, "demonhidearmor"]);
	Config.Runewords.push([Runeword.Smoke, "cuirass"]);
	Config.Runewords.push([Runeword.Smoke, "mageplate"]);
	Config.Runewords.push([Runeword.Smoke, "duskShroud"]);
	Config.Runewords.push([Runeword.Smoke, "wyrmhide"]);
	Config.Runewords.push([Runeword.Smoke, "scarabHusk"]);
	Config.Runewords.push([Runeword.Smoke, "wireFleece"]);
	Config.Runewords.push([Runeword.Smoke, "greatHauberk"]);
	Config.Runewords.push([Runeword.Smoke, "boneweave"]);
	Config.Runewords.push([Runeword.Smoke, "balrogSkin"]);
	Config.Runewords.push([Runeword.Smoke, "archonPlate"]);
	Config.KeepRunewords.push("[type] == armor # [FireResist] == 50 && [LightResist] == 50 "); 

	//AncientsPledge
	Config.Runewords.push([Runeword.AncientsPledge, "largeshield"]);
	Config.KeepRunewords.push("[type] == shield # [FireResist] >= 40 && [LightResist] >= 40 ");

	//Leaf
	Config.Runewords.push([Runeword.Leaf, "Shortstaff"]);
	Config.KeepRunewords.push("[type] == staff # [ColdResist] == 33 ");

	//Lore
	Config.Runewords.push([Runeword.Lore, "skullcap"]);
	Config.Runewords.push([Runeword.Lore, "mask"]);
	Config.Runewords.push([Runeword.Lore, "bonehelm"]);
	Config.Runewords.push([Runeword.Lore, "warhat"]);
	Config.Runewords.push([Runeword.Lore, "grimhelm"]);
	Config.Runewords.push([Runeword.Lore, "GrandCrown"]);
	Config.Runewords.push([Runeword.Lore, "Demonhead"]);
	Config.Runewords.push([Runeword.Lore, "BoneVisage"]);
	Config.KeepRunewords.push("[type] == helm # [LightResist] >= 25");

	//Spirit Sword
	Config.Runewords.push([Runeword.Spirit, "crystalSword"]);
	Config.Runewords.push([Runeword.Spirit, "longsword", Roll.Eth]);
	Config.KeepRunewords.push("[type] == sword # [itemallskills] == 2");

	//Spirit Shield
	Config.Runewords.push([Runeword.Spirit, "Monarch"]);
	Config.KeepRunewords.push("[type] == shield # [fcr] <= 35");

	// Public game options

	// If LocalChat is enabled, chat can be sent via 'sendCopyData' instead of BNET
	// To allow 'say' to use BNET, use 'say("msg", true)', the 2nd parameter will force BNET
	// LocalChat messages will only be visible on clients running on the same PC
	Config.LocalChat.Enabled = true; // enable the LocalChat system
	Config.LocalChat.Toggle = false; // optional, set to KEY value to toggle through modes 0, 1, 2
	Config.LocalChat.Mode = 2; // 0 = disabled, 1 = chat from 'say' (recommended), 2 = all chat (for manual play)
	// If Config.Leader is set, the bot will only accept invites from leader. If Config.PublicMode is not 0, Baal and Diablo script will open Town Portals.
	// If set on true, it simply parties.
	Config.PublicMode = 3; // 1 = invite and accept, 2 = accept only, 3 = invite only, 0 = disable
	// Party message settings. Each setting represents an array of messages that will be randomly chosen.
	// $name, $level, $class and $killer are replaced by the player's name, level, class and killer
	Config.Greetings = []; // Example: ["Hello, $name (level $level $class)"]
	Config.DeathMessages = []; // Example: ["Watch out for that $killer, $name!"]
	Config.Congratulations = []; // Example: ["Congrats on level $level, $name!"]
	Config.ShitList = false; // Blacklist hostile players so they don't get invited to party.
	Config.UnpartyShitlisted = false; // Leave party if someone invited a blacklisted player.

	// General config
	Config.AutoMap = true; // Set to true to open automap at the beginning of the game.
	Config.LastMessage = ""; // Message or array of messages to say at the end of the run. Use $nextgame to say next game - "Next game: $nextgame" (works with lead entry point)
	Config.MinGameTime = 200; // Min game time in seconds. Bot will TP to town and stay in game if the run is completed before.
	Config.MaxGameTime = 3400; // Maximum game time in seconds. Quit game when limit is reached.
	Config.TeleSwitch = false; // Switch to secondary (non-primary) slot when teleporting more than 5 nodes.
	Config.OpenChests = false; // Open chests. Controls key buying.
	Config.MiniShopBot = true; // Scan items in NPC shops.
	Config.PacketShopping = true; // Use packets to shop. Improves shopping speed.
	Config.TownCheck = true; // Go to town if out of potions
	Config.LogExperience = true; // Print experience statistics in the manager.
	Config.PingQuit = [{Ping: 0, Duration: 0}]; // Quit if ping is over the given value for over the given time period in seconds.
	Config.Silence = false; // Make the bot not say a word. Do not use in combination with LocalChat

	// Shrine Scanner - scan for shrines while moving.
	// Put the shrine types in order of priority (from highest to lowest). For a list of types, see sdk/shrines.txt
	Config.ScanShrines = [15,1,2,3,4,5,6,8,9,10,11,12,13,14];

	// MF Switch
	Config.MFSwitchPercent = 0; // Boss life % to switch to non-primary weapon slot. Set to 0 to disable.

	// Primary Slot - Bot will try to determine primary slot if not used (non-cta slot that's not empty)
	Config.PrimarySlot = -1; // Set to use specific weapon slot as primary weapon slot: -1 = disabled, 0 = slot I, 1 = slot II

	// Fastmod config
	Config.FCR = 255; // 0 - disable, 1 to 255 - set value of faster cast rate
	Config.FHR = 255; // 0 - disable, 1 to 255 - set value of faster hit recovery
	Config.FBR = 255; // 0 - disable, 1 to 255 - set value of faster block recovery
	Config.IAS = 255; // 0 - disable, 1 to 255 - set value of increased attack speed
	Config.PacketCasting = 0; // 0 = disable, 1 = packet teleport, 2 = full packet casting.
	Config.WaypointMenu = true;

	// Anti-hostile config
	Config.AntiHostile = false; // Enable anti-hostile
	Config.HostileAction = 0; // 0 - quit immediately, 1 - quit when hostile player is sighted, 2 - attack hostile
	Config.TownOnHostile = false; // Go to town instead of quitting when HostileAction is 0 or 1
	Config.RandomPrecast = false; // Anti-PK measure, only supported in Baal and BaalHelper and BaalAssisstant at the moment.
	Config.ViperCheck = false; // Quit if revived Tomb Vipers are sighted

	// DClone config
	Config.StopOnDClone = false; // Go to town and idle as soon as Diablo walks the Earth
	Config.SoJWaitTime = 5; // Time in minutes to wait for another SoJ sale before leaving game. 0 = disabled
	Config.KillDclone = false; // Go to Palace Cellar 3 and try to kill Diablo Clone. Pointless if you already have Annihilus.
	Config.DCloneQuit = false; // 1 = quit when Diablo walks, 2 = quit on soj sales, 0 = disabled

	// Monster skip config
	// Skip immune monsters. Possible options: "fire", "cold", "lightning", "poison", "physical", "magic".
	// You can combine multiple resists with "and", for example - "fire and cold", "physical and cold and poison"
	Config.SkipImmune = [];
	// Skip enchanted monsters. Possible options: "extra strong", "extra fast", "cursed", "magic resistant", "fire enchanted", "lightning enchanted", "cold enchanted", "mana burn", "teleportation", "spectral hit", "stone skin", "multiple shots".
	// You can combine multiple enchantments with "and", for example - "cursed and extra fast", "mana burn and extra strong and lightning enchanted"
	Config.SkipEnchant = [];
	// Skip monsters with auras. Possible options: "fanaticism", "might", "holy fire", "blessed aim", "holy freeze", "holy shock". Conviction is bugged, don't use it.
	Config.SkipAura = [];
	// Uncomment the following line to always attempt to kill these bosses despite immunities and mods
	//Config.SkipException = [getLocaleString(2851), getLocaleString(2852), getLocaleString(2853)]; // vizier, de seis, infector

	/* Attack config
	 * To disable an attack, set it to -1
	 * Skills MUST be POSITIVE numbers. For reference see ...\kolbot\sdk\skills.txt
	 */
	Config.AttackSkill[0] = -1; // Preattack skill.
	Config.AttackSkill[1] = 0; // Primary skill to bosses.
	Config.AttackSkill[2] = -1; // Primary untimed skill to bosses. Keep at -1 if Config.AttackSkill[1] is untimed skill.
	Config.AttackSkill[3] = 0; // Primary skill to others.
	Config.AttackSkill[4] = -1; // Primary untimed skill to others. Keep at -1 if Config.AttackSkill[3] is untimed skill.
	Config.AttackSkill[5] = -1; // Secondary skill if monster is immune to primary.
	Config.AttackSkill[6] = -1; // Secondary untimed skill if monster is immune to primary untimed.

	// Low mana skills - these will be used if main skills can't be cast.
	Config.LowManaSkill[0] = -1; // Timed low mana skill.
	Config.LowManaSkill[1] = -1; // Untimed low mana skill.

	/* Advanced Attack config. Allows custom skills to be used on custom monsters.
	 *	Format: "Monster Name": [timed skill id, untimed skill id]
	 *	Example: "Baal": [38, -1] to use charged bolt on Baal
	 *	Multiple entries are separated by commas
	 */
	Config.CustomAttack = {
		"Fallen Shaman": [36, 36],
		"Carver Shaman": [36, 36]
	};

	Config.NoTele = false; // Restrict char from teleporting. Useful for low level/low mana chars
	Config.Dodge = true; // Move away from monsters that get too close. Don't use with short-ranged attacks like Poison Dagger.
	Config.DodgeRange = 8; // Distance to keep from monsters.
	Config.DodgeHP = 90; // Dodge only if HP percent is less than or equal to Config.DodgeHP. 100 = always dodge.
	Config.BossPriority = false; // Set to true to attack Unique/SuperUnique monsters first when clearing
	Config.ClearType = 0; // Monster spectype to kill in level clear scripts (ie. Mausoleum). 0xF = skip normal, 0x7 = champions/bosses, 0 = all
	Config.TeleStomp = false; // Use merc to attack bosses if they're immune to attacks, but not to physical damage

	// Wereform setup. Make sure you read Templates/Attacks.txt for attack skill format.
	Config.Wereform = false; // 0 / false - don't shapeshift, 1 / "Werewolf" - change to werewolf, 2 / "Werebear" - change to werebear

	// Class specific config
	Config.CastStatic = 67; // Cast static until the target is at designated life percent. 100 = disabled.
	Config.StaticList = ["Griswold", "Andariel", "Duriel", "Mephisto", "Izual"]; // List of monster NAMES or CLASSIDS to static. Example: Config.StaticList = ["Andariel", 243];

	/* AutoSkill builds character based on array defined by the user and it replaces AutoBuild's skill system.
	 * AutoSkill will automatically spend skill points and it can also allocate any prerequisite skills as required.
	 *
	 * Format: Config.AutoSkill.Build = [[skillID, count, satisfy], [skillID, count, satisfy], ... [skillID, count, satisfy]];
	 *	skill - skill id number (see /sdk/skills.txt)
	 *	count - maximum number of skill points to allocate for that skill
	 *	satisfy - boolean value to stop(true) or continue(false) further allocation until count is met. Defaults to true if not specified.
	 *
	 *	See libs/config/Templates/AutoSkillExampleBuilds.txt for Config.AutoSkill.Build examples.
	 */
	Config.AutoSkill.Enabled = false; // Enable or disable AutoSkill system
	Config.AutoSkill.Save = 0; // Number of skill points that will not be spent and saved
	Config.AutoSkill.Build = [];

	/* AutoStat builds character based on array defined by the user and this will replace AutoBuild's stat system.
	 * AutoStat will stat Build array order. You may want to stat strength or dexterity first to meet item requirements.
	 *
	 * Format: Config.AutoStat.Build = [[statType, stat], [statType, stat], ... [statType, stat]];
	 *	statType - defined as string, or as corresponding stat integer. "strength" or 0, "dexterity" or 2, "vitality" or 3, "energy" or 1
	 *	stat - set to an integer value, and it will spend stat points until it reaches desired *hard stat value (*+stats from items are ignored).
	 *	You can also set stat to string value "all", and it will spend all the remaining points.
	 *	Dexterity can be set to "block" and it will stat dexterity up the the desired block value specified in arguemnt (ignored in classic).
	 *
	 *	See libs/config/Templates/AutoStatExampleBuilds.txt for Config.AutoStat.Build examples.
	 */
	Config.AutoStat.Enabled = false; // Enable or disable AutoStat system
	Config.AutoStat.Save = 0; // Number stat points that will not be spent and saved.
	Config.AutoStat.BlockChance = 0; // An integer value set to desired block chance. This is ignored in classic.
	Config.AutoStat.UseBulk = true; // Set true to spend multiple stat points at once (up to 100), or false to spend singe point at a time.
	Config.AutoStat.Build = [];

	// AutoBuild System ( See /d2bs/kolbot/libs/config/Builds/README.txt for instructions )
	Config.AutoBuild.Enabled = true;			//	This will enable or disable the AutoBuild system

	Config.AutoBuild.Template = "SoniFireball";	//	The name of the build associated with an existing 
												//	template filename located in libs/config/Builds/

	Config.AutoBuild.Verbose = false;			//	Allows script to print messages in console
	Config.AutoBuild.DebugMode = false;			//	Debug mode prints a little more information to console and 
												//	logs activity to /logs/AutoBuild.CharacterName._MM_DD_YYYY.log
												//	It automatically enables Config.AutoBuild.Verbose
}