// Barbarian config file

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

	// Leeching section
	Config.Leader = "eca"; // Leader's ingame character name. Leave blank to try auto-detection (works in AutoBaal, Wakka, MFHelper)
	Config.QuitList = ["A2","A3","A4","A5","A6"]; // List of character names to quit with. Example: Config.QuitList = ["MySorc", "MyDin"];
	Config.QuitListMode = 1; // 0 = use character names; 1 = use profile names (all profiles must run on the same computer).
	Config.QuitListDelay = [1, 2]; // Quit the game with random delay in case of using Config.QuitList. Example: Config.QuitListDelay = [1, 10]; will exit with random delay between 1 and 10 seconds.

	Scripts.MFHelper = false; // Run the same MF run as the MFLeader. Leader must have Config.MFLeader = true
	Scripts.DiabloHelper = false; // Chaos helper, kills monsters and doesn't open seals on its own.
		Config.DiabloHelper.Wait = 120; // Seconds to wait for a runner to be in Chaos. If Config.Leader is set, it will wait only for the leader.
		Config.DiabloHelper.Entrance = true; // Start from entrance. Set to false to start from star.
		Config.DiabloHelper.SkipTP = false; // Don't wait for town portal and directly head to chaos. It will clear monsters around chaos entrance and wait for the runner.
		Config.DiabloHelper.SkipIfBaal = false; // End script if there are party members in a Baal run.
		Config.DiabloHelper.OpenSeals = false; // Open seals as the helper
		Config.DiabloHelper.SafePrecast = false; // take random WP to safely precast
		Config.DiabloHelper.SealOrder = ["vizier", "seis", "infector"]; // the order in which to clear the seals. If seals are excluded, they won't be checked unless diablo fails to appear
		Config.DiabloHelper.RecheckSeals = false; // Teleport to each seal and double-check that it was opened and boss was killed if Diablo doesn't appear			  
	Scripts.BaalHelper = false;
		Config.BaalHelper.Wait = 120; // Seconds to wait for a runner to be in Throne
		Config.BaalHelper.KillNihlathak = false; // Kill Nihlathak before going to Throne
		Config.BaalHelper.FastChaos = false; // Kill Diablo before going to Throne
		Config.BaalHelper.DollQuit = false;  // End script if Dolls (Undead Soul Killers) are found.
		Config.BaalHelper.KillBaal = true; // Kill Baal. If set to false, you must configure Config.QuitList or the bot will wait indefinitely.
		Config.BaalHelper.SkipTP = false; // Don't wait for a TP, go to WSK3 and wait for someone to go to throne. Anti PK measure.

	// Town settings
	Config.HealHP = 90; // Go to a healer if under designated percent of life.
	Config.HealMP = 70; // Go to a healer if under designated percent of mana.
	Config.HealStatus = true; // Go to a healer if poisoned or cursed
	Config.UseMerc = true; // Use merc. This is ignored and always false in d2classic.
	Config.MercWatch = false; // Instant merc revive during battle.

	// Potion settings
	Config.UseHP = 80; // Drink a healing potion if life is under designated percent.
	Config.UseRejuvHP = 65; // Drink a rejuvenation potion if life is under designated percent.
	Config.UseMP = 20; // Drink a mana potion if mana is under designated percent.
	Config.UseRejuvMP = 1; // Drink a rejuvenation potion if mana is under designated percent.
	Config.UseMercHP = 40; // Give a healing potion to your merc if his/her life is under designated percent.
	Config.UseMercRejuv = 0; // Give a rejuvenation potion to your merc if his/her life is under designated percent.
	Config.HPBuffer = 3; // Number of healing potions to keep in inventory.
	Config.MPBuffer = 3; // Number of mana potions to keep in inventory.
	Config.RejuvBuffer = 2; // Number of rejuvenation potions to keep in inventory.

	// Chicken settings
	Config.LifeChicken = 42; // Exit game if life is less or equal to designated percent.
	Config.ManaChicken = 0; // Exit game if mana is less or equal to designated percent.
	Config.MercChicken = 0; // Exit game if merc's life is less or equal to designated percent.
	Config.TownHP = 55; // Go to town if life is under designated percent.
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
	Config.PickitFiles.push("autosmurf/barbarian.soni.nip");
	Config.PickitFiles.push("autosmurf/Start_Pickit_Soni.nip");
	Config.PickRange = 30; // Pick radius
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
	Config.RepairPercent = 60; // Durability percent of any equipped item that will trigger repairs.

	// Gambling config
	Config.Gamble = true;
	Config.GambleGoldStart = 3000000;
	Config.GambleGoldStop = 500000;

	// List of item names or classids for gambling. Check libs/NTItemAlias.dbl file for other item classids.
	Config.GambleItems.push(520); // Amulet
	Config.GambleItems.push(522); // Ring
	//Config.GambleItems.push(418); // Circlet
	//Config.GambleItems.push(419); // Coronet

	/* Cubing config. All recipe names are available in Templates/Cubing.txt. For item names/classids check NTItemAlias.dbl
	 * The format is Config.Recipes.push([recipe_name, item_name_or_classid, etherealness]). Etherealness is optional and only applies to some recipes.
	 */
	Config.Cubing = false; // Set to true to enable cubing.

	// Ingredients for the following recipes will be auto-picked, for classids check libs/NTItemAlias.dbl

	//Config.Recipes.push([Recipe.Gem, "Amethyst"]); // Make Flawless Amethyst
	//Config.Recipes.push([Recipe.Gem, "Ruby"]); // Make Flawless Ruby
	
	Config.Recipes.push([Recipe.Gem, "Flawless Amethyst"]); // Make Perfect Amethyst
	//Config.Recipes.push([Recipe.Gem, "Flawless Topaz"]); // Make Perfect Topaz
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
	
	//Myth
	Config.Runewords.push([Runeword.Myth, "ringmail"]);
	Config.Runewords.push([Runeword.Myth, "breastplate"]);
	Config.Runewords.push([Runeword.Myth, "lightplate"]);
	Config.Runewords.push([Runeword.Myth, "cuirass"]);
	Config.Runewords.push([Runeword.Myth, "mageplate"]);

	Config.KeepRunewords.push("[type] == armor # [barbarianskills] == 2"); 

	//Lore
	Config.Runewords.push([Runeword.Lore, "skullcap"]);
	Config.Runewords.push([Runeword.Lore, "crown"]);
	Config.Runewords.push([Runeword.Lore, "mask"]);
	Config.Runewords.push([Runeword.Lore, "bonehelm"]);
	Config.Runewords.push([Runeword.Lore, "jawbonecap"]);
	Config.Runewords.push([Runeword.Lore, "Fangedhelm"]);
	Config.Runewords.push([Runeword.Lore, "Hornedhelm"]);
	Config.Runewords.push([Runeword.Lore, "Assaulthelmet"]);
	Config.Runewords.push([Runeword.Lore, "Jawbonevisor"]);

	Config.KeepRunewords.push("([type] == helm || [type] == primalhelm) # [LightResist] >= 25");

	//Weapons
	Config.Runewords.push([Runeword.Malice, "Flail"]);
	Config.Runewords.push([Runeword.Malice, "Warhammer"]);
	Config.KeepRunewords.push("([name] == flail || [name] == warhammer) # [itemopenwounds] == 100");
	
	Config.Runewords.push([Runeword.Steel, "Flail"]);
	Config.Runewords.push([Runeword.Steel, "Warhammer"]);
	Config.KeepRunewords.push("([name] == flail || [name] == warhammer) # [itemopenwounds] == 50");
	
	Config.Runewords.push([Runeword.Black, "Flail"]);
	Config.KeepRunewords.push("[name] == flail # [itemcrushingblow] == 40");
		
	Config.Runewords.push([Runeword.Strength, "Flail"]);
	Config.Runewords.push([Runeword.Strength, "Warhammer"]);
	Config.KeepRunewords.push("([name] == flail || [name] == warhammer) # [strength] == 20");

	Config.Runewords.push([Runeword.HolyThunder, "Warscepter"]);
	Config.KeepRunewords.push("[name] == warscepter # [lightresist] == 60");

	Config.Runewords.push([Runeword.KingsGrace, "Warscepter"]);
	Config.KeepRunewords.push("[name] == warscepter # [enhanceddamage] >= 100 && [attackrate] >= 150");


	// Public game options

	// If LocalChat is enabled, chat can be sent via 'sendCopyData' instead of BNET
	// To allow 'say' to use BNET, use 'say("msg", true)', the 2nd parameter will force BNET
	// LocalChat messages will only be visible on clients running on the same PC
	Config.LocalChat.Enabled = true; // enable the LocalChat system
	Config.LocalChat.Toggle = false; // optional, set to KEY value to toggle through modes 0, 1, 2
	Config.LocalChat.Mode = 2; // 0 = disabled, 1 = chat from 'say' (recommended), 2 = all chat (for manual play)
	// If Config.Leader is set, the bot will only accept invites from leader. If Config.PublicMode is not 0, Baal and Diablo script will open Town Portals.
	// If set on true, it simply parties.
	Config.PublicMode = 2; // 1 = invite and accept, 2 = accept only, 3 = invite only, 0 = disable
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
	Config.MinGameTime = 185; // Min game time in seconds. Bot will TP to town and stay in game if the run is completed before.
	Config.MaxGameTime = 0; // Maximum game time in seconds. Quit game when limit is reached.
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
	Config.ScanShrines = [15,1,2,3,4,5,6,8,9,10,11,12,13,14]

	// MF Switch
	Config.MFSwitchPercent = 0; // Boss life % to switch to non-primary weapon slot. Set to 0 to disable.

	// Primary Slot - Bot will try to determine primary slot if not used (non-cta slot that's not empty)
	Config.PrimarySlot = -1; // Set to use specific weapon slot as primary weapon slot: -1 = disabled, 0 = slot I, 1 = slot II

	// Fastmod config
	Config.FCR = 0; // 0 - disable, 1 to 255 - set value of faster cast rate
	Config.FHR = 255; // 0 - disable, 1 to 255 - set value of faster hit recovery
	Config.FBR = 255; // 0 - disable, 1 to 255 - set value of faster block recovery
	Config.IAS = 25; // 0 - disable, 1 to 255 - set value of increased attack speed
	Config.PacketCasting = 0; // 0 = disable, 1 = packet teleport, 2 = full packet casting
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
	Config.AttackSkill[1] = 0; // Primary skill for bosses.
	Config.AttackSkill[2] = -1; // Backup/Immune skill for bosses.
	Config.AttackSkill[3] = 0; // Primary skill for others.
	Config.AttackSkill[4] = -1; // Backup/Immune skill for others.

	// Low mana skills - these will be used if main skills can't be cast.
	Config.LowManaSkill[0] = -1; // Low mana skill.

	/* Advanced Attack config. Allows custom skills to be used on custom monsters.
	 *	Format: "Monster Name": [attack skill id]
	 *	Multiple entries are separated by commas
	 */
	Config.CustomAttack = {
		"Fallen Shaman": [133, 0],
		"Carver Shaman": [133, 0]
	};

	Config.BossPriority = false; // Set to true to attack Unique/SuperUnique monsters first when clearing
	Config.ClearType = 0; // Monster spectype to kill in level clear scripts (ie. Mausoleum). 0xF = skip normal, 0x7 = champions/bosses, 0 = all

	// Wereform setup. Make sure you read Templates/Attacks.txt for attack skill format.
	Config.Wereform = false; // 0 / false - don't shapeshift, 1 / "Werewolf" - change to werewolf, 2 / "Werebear" - change to werebear

	// Class specific config
	Config.FindItem = false; // Use Find Item skill on corpses after clearing.
	Config.FindItemSwitch = false; // Switch to non-primary slot when using Find Item skills

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

	Config.AutoBuild.Template = "SoniBO";	//	The name of the build associated with an existing 
												//	template filename located in libs/config/Builds/

	Config.AutoBuild.Verbose = false;			//	Allows script to print messages in console
	Config.AutoBuild.DebugMode = false;			//	Debug mode prints a little more information to console and 
												//	logs activity to /logs/AutoBuild.CharacterName._MM_DD_YYYY.log
												//	It automatically enables Config.AutoBuild.Verbose
}