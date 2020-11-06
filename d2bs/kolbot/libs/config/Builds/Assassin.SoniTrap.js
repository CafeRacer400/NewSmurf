/** [SoniTrap] Trap-Assassin Build (lvl 1 till 45 on norm)
*
* Instructions:	See /d2bs/kolbot/libs/config/Builds/README.txt
* Skill IDs:	See /d2bs/kolbot/sdk/skills.txt for a list of skill IDs.
*
Finished Char Build:
*
	Stats									Base Stats			Requirement
	------------							----------			-----------
 0 = Strength: 	45 (25 points used)				20				34 Large Shield || 43 Crystal Sword || 45 Long Sword Eth
 1 = Energy: 	35 (10 points used)				25				Mana :D
 2 = Dexterity: 30 (10 points used)				20				29 Long Sword Eth
 3 = Vitality: 	Rest 							20
*
	Skills					 Levelreq		  SkillID		  TotalPoints
	------------			 --------		  -------		  -----------
	Fireblast			   		1				251				20	- Done @ level 43
	Claw Mastery		    	1				252				1	- Done @ level 5
	Fade						18				267				1	- Done @ level 31
	Burst of Speed (BoS)    	6				258				5	- Done @ level 45
	Wake of Fire (WoF)	    	12				262				20	- Done @ level 31
*/
js_strict(true);

if (!isIncluded("common/Cubing.js")) { include("common/Cubing.js"); };
if (!isIncluded("common/Prototypes.js")) { include("common/Prototypes.js"); };
if (!isIncluded("common/Runewords.js")) { include("common/Runewords.js"); };

var AutoBuildTemplate = {
	1:	{	
			Update: function () {
				Config.TownCheck		= false;						// Don't go to town for more potions
				Config.StashGold 		= 200;
				Config.AttackSkill = [-1, 0, -1, 0, -1, -1, -1];
				Config.LowManaSkill = [0,0];
				Config.HPBuffer = 2;
				Config.MPBuffer = 6;
				Config.RejuvBuffer = 2;
				Config.OpenChests		= true; 						// Open chests. Controls key buying.
				Config.LogExperience	= true; 						// Print experience statistics in the manager.
				Config.ScanShrines		= [15, 13, 12, 14, 7, 6, 2, 1];	
				Config.BeltColumn		= ["hp", "hp", "mp", "mp"];		// Keep tons of health potions!
				Config.Cubing = false;									// Don't cube yet!
				Config.UseFade = false; 
			}
		},
	2:	{	
			SkillPoints: [251],				// +1 Fireblast (lvl 1)
			StatPoints: [1,1,1,1,1],		// +5 Energy (30)
			Update: function () {
				Config.AttackSkill = [-1,251,-1,251,-1,251,-1];
			}
		},
	3:	{
			SkillPoints: [251],				// +1 Fireblast (lvl 2)
			StatPoints: [1,1,1,1,1],		// +5 Energy (35)
			Update: function () {
			}
		},
	4:  {
			SkillPoints: [251],				// +1 Fireblast (lvl 3)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (25)
			Update: function () {
			}	
        },
	5:	{
			SkillPoints: [252],				// +1 Claw Mastery (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (30)
			Update: function () {
			}
		},
	6:	{
			SkillPoints: [258],				// +1 BoS (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (35)
			Update: function () {
				Config.UseBoS = true;		// SPEED :D
			}
		},
	7:	{
			SkillPoints: [258,251],			// +1 BoS (lvl 2) +1 Fireblast (lvl 4) (Q1 Den should be done here at least)
			StatPoints: [3,3,3,0,0],		// +3 Vitality (38), + 2 Strength (22)
			Update: function () {
			}
		},
	8:	{
			SkillPoints: [251],				// +1 Fireblast (lvl 5)
			StatPoints: [0,0,0,0,0],		// +5 Strength (27)
			Update: function () {
			}
		},
	9:	{
			SkillPoints: [258],				// +1 BoS (lvl 3)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (43)
			Update: function () {
			}
		},
	10:	{
			SkillPoints: [258],				// +1 BoS (lvl 4)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (48)
			Update: function () {
				Config.StashGold = 1000; 	// Minimum amount of gold to stash.
				Config.LowGold = 5000;
				Config.TownCheck = true; 	// Go to town for more potions
			}
		},
	11:	{	
			SkillPoints: [251],				// +1 Fireblast (lvl 6)
			StatPoints: [3,3,0,0,0],		// +2 Vitality (50), + 3 Strength (30)
			Update: function () {
			}
		},
	12:	{
			SkillPoints: [262],				// +1 WoF (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (55)
			Update: function () {
				Config.AttackSkill = [-1,251,-1,251,-1,-1,-1];
				Config.LowManaSkill = [-1,-1];
				Config.UseTraps = true;
				Config.Traps = [262, 262, 262, -1, -1]; // Skill IDs for traps to be cast on all mosters except act bosses.
				Config.BossTraps = [262, 262, 262, 262, 262]; // Skill IDs for traps to be cast on act bosses.
				Config.MinColumn = [2, 2, 2, 2];
				Config.Dodge = true;
				Config.DodgeRange = 10;
				Config.UseBoS = true;
				Config.UseFade = false;
			}
		},
	13:	{
			SkillPoints: [262],				// +1 WoF (lvl 2)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (60)
			Update: function () {
			}
		},
	14:	{
			SkillPoints: [262],				// +1 WoF (lvl 3)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (65)
			Update: function () {
			}
		},
	15:	{
			SkillPoints: [262],				// +1 WoF (lvl 4)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (70)
			Update: function () {
			}
		},
	16:	{
			SkillPoints: [262],				// +1 WoF (lvl 5)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (75)
			Update: function () {
				Config.HPBuffer = 2; // Number of healing potions to keep in inventory.
				Config.MPBuffer = 6; // Number of mana potions to keep in inventory.
				
			}
		},
	17:	{
			SkillPoints: [262],				// +1 WoF (lvl 6)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (80)
			Update: function () {
			}
		},
	18:	{
			SkillPoints: [262],				// +1 WoF (lvl 7)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (85)
			Update: function () {
			}
		},
	19:	{
			SkillPoints: [262],				// +1 WoF (lvl 8)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (90)
			Update: function () {
				Config.Cubing = true;																	// At least you should have a cube now
				Config.MakeRunewords = true;
				Config.Runewords.push([Runeword.Stealth, ("hardleatherarmor" || "leatherarmor")]);		// Ultimate Starter Armor
				Config.Runewords.push([Runeword.Leaf, "shortstaff"]);									// Ultimate Fire Weapon :D

			}
		},
	20:	{
			SkillPoints: [262],				// +1 WoF (lvl 9)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (95)
			Update: function () {
				Config.LowGold = 10000;
			}
		},
	21:	{	
			SkillPoints: [262],				// +1 WoF (lvl 10)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (100)
			Update: function () {
			}
		},
	22:	{
			SkillPoints: [262],				// +1 WoF (lvl 11)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (105)
			Update: function () {
			}
		},
	23:	{
			SkillPoints: [262],				// +1 WoF (lvl 12)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (110)
			Update: function () {
			}
		},
	24:	{
			SkillPoints: [262],				// +1 WoF (lvl 13)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (115)
			Update: function () {
			}
		},
	25:	{
			SkillPoints: [262,251],			// +1 WoF (lvl 14) +1 Fireblast (lvl 7) (Q1 Radament should be done here at least)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (120)
			Update: function () {
				Config.LowGold = 15000;
			}
		},
	26:	{
			SkillPoints: [262],				// +1 WoF (lvl 15)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (125)
			Update: function () {
			}
		},
	27:	{
			SkillPoints: [262],				// +1 WoF (lvl 16)
			StatPoints: [0,0,0,0,0],		// +5 Strength (35) (34 Str. req. for Large Shield)
			Update: function () {
				Config.Runewords.push([Runeword.Lore, ("circlet" || "skullcap" || "helm" || "mask" || "bonehelm")]);		// Lore Helm :D
				Config.Runewords.push([Runeword.Insight, ("bill" || "partizan" || "becdecorbin" || "poleaxe" || "halberd" || "warscythe")]);		// Insight Merc Weapon :D
			}
		},
	28:	{
			SkillPoints: [262],				// +1 WoF (lvl 17)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (130)
			Update: function () {
			}
		},
	29:	{
			SkillPoints: [262],				// +1 WoF (lvl 18)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (135)
			Update: function () {
			}
		},
	30:	{
			SkillPoints: [262],				// +1 WoF (lvl 19)
			StatPoints: [3,3,3,3,3,3,3,3,3,3],	// +10 Vitality (145) (A3 Lam Essen's Quest should be done here at least)
			Update: function () {
			}
		},
	31:	{	
			SkillPoints: [262,267,251],		// +1 WoF (lvl 20) +1 Fade (lvl 1) +1 Fireblast (lvl 8) (Q1 Izual should be done here at least)
			StatPoints: [3,0,0,0,0],		// +1 Vitality (146) +4 Strength (39)
			Update: function () {
			}
		},
	32:	{
			SkillPoints: [251],				// +1 Fireblast (lvl 9)
			StatPoints: [3,0,0,0,0],		// +1 Vitality (147) +4 Strength (43) (Str. for Crystal Sword nonEth)
			Update: function () {
			}
		},
	33:	{
			SkillPoints: [251],				// +1 Fireblast (lvl 10)
			StatPoints: [3,3,3,0,0],		// +3 Vitality (150) +2 Strength (45) (Str. for Long Sword Eth)
			Update: function () {
			}
		},
	34:	{
			SkillPoints: [251],				// +1 Fireblast (lvl 11)
			StatPoints: [3,3,2,2,2],		// +2 Vitality (152) +3 Dexterity (23)
			Update: function () {
			}
		},
	35:	{
			SkillPoints: [251],				// +1 Fireblast (lvl 12)
			StatPoints: [3,3,2,2,2],		// +2 Vitality (154) +3 Dexterity (26)
			Update: function () {
				Config.LowGold = 30000;
			}
		},
	36:	{
			SkillPoints: [251],				// +1 Fireblast (lvl 13)
			StatPoints: [3,2,2,2,2],		// +1 Vitality (155) +4 Dexterity (30) (Dex req. for Long Sword Eth)
			Update: function () {
			}
		},
	37:	{
			SkillPoints: [251],				// +1 Fireblast (lvl 14)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (160)
			Update: function () {
			}
		},
	38:	{
			SkillPoints: [251],				// +1 Fireblast (lvl 15)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (165)
			Update: function () {
			}
		},
	39:	{
			SkillPoints: [251],				// +1 Fireblast (lvl 16)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (170)
			Update: function () {
			}
		},
	40:	{
			SkillPoints: [251],				// +1 Fireblast (lvl 17)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (175)
			Update: function () {
				Config.LowGold = 35000;
			}
		},
	41:	{	
			SkillPoints: [251],				// +1 Fireblast (lvl 18)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (180)
			Update: function () {
			}
		},
	42:	{
			SkillPoints: [251],				// +1 Fireblast (lvl 19)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (185)
			Update: function () {
			}
		},
	43:	{
			SkillPoints: [251],				// +1 Fireblast (lvl 20)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (190)
			Update: function () {
			}
		},
	44:	{
			SkillPoints: [272],				// +1 Wake of Inferno (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (195)
			Update: function () {
			}
		},
	45:	{
			SkillPoints: [258],				// +1 BoS (lvl 5)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (200)
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