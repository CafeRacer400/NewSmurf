/** [SoniFireball] Fireball-Sorceress Build (lvl 1 till 45 on norm)
*
* Instructions:	See /d2bs/kolbot/libs/config/Builds/README.txt
* Skill IDs:	See /d2bs/kolbot/sdk/skills.txt for a list of skill IDs.
*
Finished Char Build:
*
	Stats									Base Stats			Requirement
	------------							----------			-----------
 0 = Strength: 	43 (33 points used)				10				34 Large Shield || 43 Crystal Sword
 1 = Energy: 	45 (10 points used)				35				Mana :D
 2 = Dexterity: 25								25				
 3 = Vitality: 	Rest 							10
*
	Skills					 Levelreq		  SkillID		  TotalPoints
	------------			 --------		  -------		  -----------
	Frozen Armor		   		1				40				1	- Done @ level 5
	Warmth		    			1				37				1	- Done @ level 25
	Static						6				42				1	- Done @ level 6
	Telekinesis    				6				43				1	- Done @ level 17
	Teleport	    			18				54				1	- Done @ level 18
	Firebolt					1				36				20	- Done @ level 43
	Fire Ball (FB)				12				47				20	- Done @ level 32
	Fire Mastery				30				61				3	- Done @ level 45
*/
js_strict(true);

if (!isIncluded("common/Cubing.js")) { include("common/Cubing.js"); };
if (!isIncluded("common/Prototypes.js")) { include("common/Prototypes.js"); };
if (!isIncluded("common/Runewords.js")) { include("common/Runewords.js"); };

var AutoBuildTemplate = {
	1:	{
			//SkillPoints: [-1],										// This doesn't matter. We don't have skill points to spend at lvl 1
			//StatPoints: [-1,-1,-1,-1,-1],								// This doesn't matter. We don't have stat points to spend at lvl 1
			Update: function () {
				Config.TownCheck		= false;						// Don't go to town for more potions
				Config.StashGold 		= 200;							// Minimum amount of gold to stash.
				Config.AttackSkill		= [-1, 36, -1, 36, -1, 0, 0];	// At level 1 we start with a +1 Fire Bolt staff
				Config.LowManaSkill		= [0, 0];						// Hit stuff when out of Mana.
				Config.HPBuffer = 2;
				Config.MPBuffer = 6;
				Config.RejuvBuffer = 2;
				Config.LogExperience	= true; 						// Print experience statistics in the manager.
				Config.ScanShrines		= [15, 13, 12, 14, 7, 6, 3, 2, 1];	
				Config.BeltColumn		= ["hp", "hp", "hp", "mp"];		// Keep tons of health potions!
				Config.Cubing = false;									// Don't cube yet!
				Config.Dodge = false;
			}
		},
	2:	{
			SkillPoints: [36],				// +1 Firebolt (lvl 1)
			StatPoints: [1,1,1,1,1],		// +5 Energy (40)
			Update: function () {
				Config.BeltColumn = ["hp", "hp", "mp", "mp"];
			}
		},
	3:	{
			SkillPoints: [36],				// +1 Firebolt (lvl 2)
			StatPoints: [1,1,1,1,1],		// +5 Energy (45)
			Update: function () {
			}
		},
	4:	{
			SkillPoints: [36],				// +1 Firebolt (lvl 3)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (15)
			Update: function () {
			}
		},
	5:	{
			SkillPoints: [40],				// +1 Frozen Armor (lvl 1)
			StatPoints: [0,0,0,0,0],		// +5 Strength (15)
			Update: function () {
			}
		},
	6:	{
			SkillPoints: [42],				// +1 Static Field (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (20)
			Update: function () {
				Config.CastStatic = 70; 	// Cast static until the target is at designated life percent. 100 = disabled.
			}
		},
	7:	{
			SkillPoints: [36, 36],			// +2 Firebolt (lvl 5) (Q1 Den should be done here at least)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (25)
			Update: function () {
				//Config.PickitFiles.splice(Config.PickitFiles.indexOf("belowlevelseven.nip"), 1);	// Will remove index "belowlevel7.nip" from Config.PickitFiles
			}
		},
	8:	{
			SkillPoints: [36],				// +1 Firebolt (lvl 6)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (30)
			Update: function () {
			}
		},
	9:	{
			SkillPoints: [36],				// +1 Firebolt (lvl 7)
			StatPoints: [0,0,0,0,0],		// +5 Strength (20)
			Update: function () {
			}
		},
	10:	{
			SkillPoints: [36],				// +1 Firebolt (lvl 8)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (35)
			Update: function () {
				Config.LowGold = 5000;
			}
		},
	11:	{
			SkillPoints: [36],				// +1 Firebolt (lvl 9)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (40)
			Update: function () {
			}
		},
	12:	{
			SkillPoints: [47],				// +1 FB (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (45)
			Update: function () {
				Config.AttackSkill = [-1, 47, -1, 47, -1, 0, 0];		// Fire Ball
				Config.Dodge = true;
				Config.TownCheck = true; 	// Go to town if out of potions						
			}
		},
	13:	{
			SkillPoints: [47],				// +1 FB (lvl 2)
			StatPoints: [0,0,0,0,0],		// +5 Strength (25)
			Update: function () {
			}
		},
	14:	{
			SkillPoints: [47],				// +1 FB (lvl 3)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (50)
			Update: function () {
			}
		},
	15:	{
			SkillPoints: [47],				// +1 FB (lvl 4)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (55)
			Update: function () {
			}
		},
	16:	{
			SkillPoints: [47],				// +1 FB (lvl 5)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (60)
			Update: function () {
			}
		},
	17:	{
			SkillPoints: [43],				// +1 Telekinesis (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (65)
			Update: function () {
			}
		},
	18:	{
			SkillPoints: [54],				// +1 Teleport (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (70)
			Update: function () {
			}
		},
	19:	{
			SkillPoints: [47],				// +1 FB (lvl 6)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (75)
			Update: function () {
				Config.Cubing = true;																	// At least you should have a cube now
				Config.MakeRunewords = true;
				Config.Runewords.push([Runeword.Stealth, ("hardleatherarmor" || "leatherarmor")]);		// Ultimate Starter Armor
				Config.Runewords.push([Runeword.Leaf, "shortstaff"]);									// Ultimate Fire Weapon :D
			}
		},
	20:	{
			SkillPoints: [47],				// +1 FB (lvl 7)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (80)
			Update: function () {
				Config.LowGold = 10000;
			}
		},
	21:	{
			SkillPoints: [47],				// +1 FB (lvl 8)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (85)
			Update: function () {
			}
		},
	22:	{
			SkillPoints: [47],				// +1 FB (lvl 9)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (90)
			Update: function () {
			}
		},
	23:	{
			SkillPoints: [47],				// +1 FB (lvl 10)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (95)
			Update: function () {
			}
		},
	24:	{
			SkillPoints: [47],				// +1 FB (lvl 11)
			StatPoints: [0,0,0,0,0],		// +5 Strength (30)
			Update: function () {
			}
		},
	25:	{
			SkillPoints: [47,37],			// +1 FB (lvl 12) +1 Warmth (lvl 1) (Q1 Radament should be done here at least)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (100)
			Update: function () {
				Config.LowGold = 15000;
			}
		},
	26:	{
			SkillPoints: [47],				// +1 FB (lvl 13)
			StatPoints: [0,0,0,0,0],		// +5 Strength (35)
			Update: function () {
			}
		},
	27:	{
			SkillPoints: [47],				// +1 FB (lvl 14)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (105)
			Update: function () {
				Config.Runewords.push([Runeword.Lore, ("circlet" || "skullcap" || "helm" || "mask" || "bonehelm")]);		// Lore Helm :D
				Config.Runewords.push([Runeword.Insight, ("bill" || "partizan" || "becdecorbin" || "poleaxe" || "halberd" || "warscythe")]);		// Insight Merc Weapon :D													   
			}
		},
	28:	{
			SkillPoints: [47],				// +1 FB (lvl 15)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (110)
			Update: function () {
			}
		},
	29:	{
			SkillPoints: [47],				// +1 FB (lvl 16)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (115)
			Update: function () {
			}
		},
	30:	{
			SkillPoints: [61],					// +1 Fire Mastery (lvl 1)	(= 30% FireDmg, jeder weitere Punkt nur 7%, Firebolt als Synergy 14% !!) (A3 Lam Essen's Quest should be done here at least)
			StatPoints: [0,0,0,0,0,0,0,0,3,3],	// +8 Strength (43) +2 Vitality (117) (Norm Lam Esen's Tome)
			Update: function () {
				Config.LowGold = 20000;
				Config.MercWatch = true; 		// Instant merc revive during battle.
			}
		},
	31:	{	
			SkillPoints: [47,47,47],		// +3 FB (lvl 19) (Q1 Izual should be done here at least)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (122)
			Update: function () {
			}
		},
	32:	{
			SkillPoints: [47],				// +1 FB (lvl 20)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (127)
			Update: function () {
			}
		},
	33:	{
			SkillPoints: [36],				// +1 Firebolt (lvl 10)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (132)
			Update: function () {
			}
		},
	34:	{
			SkillPoints: [36],				// +1 Firebolt (lvl 11)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (137)
			Update: function () {
			}
		},
	35:	{
			SkillPoints: [36],				// +1 Firebolt (lvl 12)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (142)
			Update: function () {
				Config.LowGold = 30000;
			}
		},
	36:	{
			SkillPoints: [36],				// +1 Firebolt (lvl 13)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (147)
			Update: function () {
			}
		},
	37:	{
			SkillPoints: [36],				// +1 Firebolt (lvl 14)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (152)
			Update: function () {
			}
		},
	38:	{
			SkillPoints: [36],				// +1 Firebolt (lvl 15)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (157)
			Update: function () {
			}
		},
	39:	{
			SkillPoints: [36],				// +1 Firebolt (lvl 16)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (162)
			Update: function () {
			}
		},
	40:	{
			SkillPoints: [36],				// +1 Firebolt (lvl 17)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (167)
			Update: function () {
				Config.LowGold = 35000;
			}
		},
	41:	{	
			SkillPoints: [36],				// +1 Firebolt (lvl 18)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (172)
			Update: function () {
			}
		},
	42:	{
			SkillPoints: [36],				// +1 Firebolt (lvl 19)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (177)
			Update: function () {
			}
		},
	43:	{
			SkillPoints: [36],				// +1 Firebolt (lvl 20)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (182)
			Update: function () {
			}
		},
	44:	{
			SkillPoints: [61],				// +1 Fire Mastery (lvl 2)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (187)
			Update: function () {
			}
		},
	45:	{
			SkillPoints: [61],				// +1 Fire Mastery (lvl 3)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (192)
			Update: function () {
				Config.LowGold = 40000;
			}
		},
	46:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	47:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	48:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	49:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	50:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	51:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	52:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	53:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	54:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	55:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	56:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	57:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	58:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	59:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	60:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	61:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	62:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	63:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	64:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	65:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	66:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	67:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	68:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	69:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	70:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	71:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	72:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	73:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	74:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	75:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	76:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	77:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	78:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	79:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	80:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	81:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	82:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	83:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	84:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	85:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	86:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	87:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	88:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	89:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	90:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	91:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	92:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	93:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	94:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	95:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	96:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	97:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	98:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		},
	99:	{
			SkillPoints: [-1],				// Save Skill Point
			StatPoints: [-1,-1,-1,-1,-1],	// Save Stat Points
			Update: function () {
			}
		}
};