/** [SoniZeal] Fire-Zealer Beginner Pala Build (lvl 1 till 45 on norm)
*
* Instructions:	See /d2bs/kolbot/libs/config/Builds/README.txt
* Skill IDs:	See /d2bs/kolbot/sdk/skills.txt for a list of skill IDs.
*
Finished Char Build:
*
	Stats									Base Stats			Requirement
	------------							----------			-----------
 0 = Strength: 	55 (30 points used)				25				Enough for the most Equipment
 1 = Energy: 	15								15				
 2 = Dexterity: 35 (15 points used)				20				AR + Req. for Flail
 3 = Vitality: 	Rest 							25
*
	Skills					 Levelreq		  SkillID		  TotalPoints
	------------			 --------		  -------		  -----------
	Might				  		1				98				1	- Done @ level 2
	Smite						1				97				1	- Done @ level 3
	Sacrifice					1				96				1	- Done @ level 9
	Charge						12				107				1	- Done @ level 25
	Resist Fire					1				100				4	- Done @ level 7
	Holy Fire					6				102				13	- Done @ level 23
	Zeal						12				106				4	- Done @ level 15
	Vengeance					18				111				1	- Done @ level 26
	Holy Freeze					18				114				1	- Done @ level 28
	Holy Bolt					6				101				1	- Done @ level 24
	Blessed Hammer				18				112				1	- Done @ level 31
	Holy Shield					24				117				1	- Done @ level 31
	Thorns						6				103				1 	- Done @ level 27
	Sanctuary					24				119				1	- Done @ level 29
	Conviction					30				123				16	- Done @ level 45
*
	Config.AttackSkill[0] = -1; // Preattack skill.
	Config.AttackSkill[1] = 0; // Primary skill to bosses.
	Config.AttackSkill[2] = -1; // Primary aura to bosses
	Config.AttackSkill[3] = 0; // Primary skill to others.
	Config.AttackSkill[4] = -1; // Primary aura to others.
	Config.AttackSkill[5] = -1; // Secondary skill if monster is immune to primary.
	Config.AttackSkill[6] = -1; // Secondary aura.

	Config.LowManaSkill[0] = -1; // Low mana skill.
	Config.LowManaSkill[1] = -1; // Low mana aura.
*/
js_strict(true);

if (!isIncluded("common/Cubing.js")) { include("common/Cubing.js"); };
if (!isIncluded("common/Prototypes.js")) { include("common/Prototypes.js"); };
if (!isIncluded("common/Runewords.js")) { include("common/Runewords.js"); };

var AutoBuildTemplate = {
	1:	{
			//SkillPoints: [-1],											// This doesn't matter. We don't have skill points to spend at lvl 1]
			//StatPoints: [-1,-1,-1,-1,-1],									// This doesn't matter. We don't have stat points to spend at lvl 1
			Update: function () {
				Config.TownCheck		= false;							// Don't go to town for more potions
				Config.StashGold 		= 200;								// Minimum amount of gold to stash.
				Config.AttackSkill		= [-1, 0, 0, 0, 0, -1, -1];
				Config.LowManaSkill		= [0, 0];
				Config.HPBuffer = 4;
				Config.MPBuffer = 2;
				Config.RejuvBuffer = 2;
				Config.LogExperience	= true; 							// Print experience statistics in the manager.
				Config.ScanShrines		= [15, 13, 12, 14, 7, 6, 3, 2, 1];
				Config.BeltColumn		= ["hp", "hp", "hp", "hp"];			// Keep tons of health potions!
				Config.MinColumn 		= [1, 1, 1, 1];
				Config.OpenChests = true;									// Might as well open em.
				Config.Cubing = false;										// Don't cube yet!
				Config.Charge = false;										// Don't waste mana on charging while walking
			}
		},
	2:	{
			SkillPoints: [98],				// +1 Might (lvl 1)
			StatPoints: [2,2,2,2,2],		// +5 Dexterity (25)
			Update: function () {
				Config.AttackSkill = [-1, 0, 98, 0, 98, -1, -1];		// Use Might
				Config.LowManaSkill = [0, 98];							// Use Might while hitting stuff.
			}
		},
	3:	{
			SkillPoints: [100], 			// +1 Resist Fire (lvl 1)
			StatPoints: [2,2,2,2,2],		// +5 Dexterity (30)
			Update: function () {
			}
		},
	4:	{
			SkillPoints: [100], 			// +1 Resist Fire (lvl 2)
			StatPoints: [2,2,2,2,2],		// +5 Dexterity (35)
			Update: function () {
			}
		},
	5:	{
			SkillPoints: [100], 			// +1 Resist Fire (lvl 3)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (30)
			Update: function () {
				Config.BeltColumn = ["hp", "hp", "hp", "mp"]; 				// Start keeping mp
				Config.MinColumn = [2,2,2,2];
			}
		},
	6:	{
			SkillPoints: [102], 			// +1 Holy Fire (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (35)
			Update: function () {
				Config.AttackSkill = [-1, 0, 102, 0, 102, -1, -1];			// Use Holy Fire Aura
				Config.LowManaSkill = [0, 102];								// Use Holy Fire Aura while hitting stuff.
			}
		},
	7:	{
			SkillPoints: [102, 100],		// +1 Holy Fire (lvl 2) +1 Resist Fire (lvl 4) (Q1 Den should be done here at least)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (40) 
			Update: function () {
			}
		},
	8:	{
			SkillPoints: [102], 			// +1 Holy Fire (lvl 3)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (45)
			Update: function () {
			}
		},
	9:	{
			SkillPoints: [96], 				// +1 Sacrifice (lvl 1)
			StatPoints: [0,0,0,0,0],		// +5 Strength (30)
			Update: function () {
			}
		},
	10:	{
			SkillPoints: [102], 			// +1 Holy Fire (lvl 4)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (50)
			Update: function () {
				Config.StashGold = 1000;	// Minimum amount of gold to stash.
				Config.LowGold = 5000;
				Config.TownCheck = true;	// Go to town for more potions
			}
		},
	11:	{
			SkillPoints: [102], 			// +1 Holy Fire (lvl 5)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (55)
			Update: function () {
			}
		},
	12:	{
			SkillPoints: [106],				// +1 Zeal (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (60)
			Update: function () {
				Config.AttackSkill = [-1, 106, 102, 106, 102, -1, -1];		// Use Holy Fire Aura
				Config.LowManaSkill = [0, 102];								// Use Holy Fire Aura while hitting stuff.
			}
		},
	13:	{
			SkillPoints: [106],				// +1 Zeal (lvl 2)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (65)
			Update: function () {
			}
		},
	14:	{
			SkillPoints: [106],				// +1 Zeal (lvl 3)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (70)
			Update: function () {
			}
		},
	15:	{
			SkillPoints: [106],				// +1 Zeal (lvl 4)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (75)
			Update: function () {
				Config.OpenChests = false;								// Eyes on the prize!
			}
		},
	16:	{
			SkillPoints: [102], 			// +1 Holy Fire (lvl 6)
			StatPoints: [3,3,3,3,0],		// +4 Vitality (79) +1 Strength (31)
			Update: function () {
			}
		},
	17:	{
			SkillPoints: [102], 			// +1 Holy Fire (lvl 7)
			StatPoints: [0,0,0,0,0],		// +5 Strength (36)
			Update: function () {
			}
		},
	18:	{
			SkillPoints: [102], 			// +1 Holy Fire (lvl 8)
			StatPoints: [0,0,0,0,0],		// +5 Strength (41)	for Flail
			Update: function () {
				Config.MinColumn = [3, 3, 3, 3];						// Should have a decent belt by now
			}
		},
	19:	{
			SkillPoints: [102], 			// +1 Holy Fire (lvl 9)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (84)
			Update: function () {
				Config.Cubing = true;																	// At least you should have a cube now
				Config.MakeRunewords = true;
			}
		},
	20:	{
			SkillPoints: [102], 			// +1 Holy Fire (lvl 10)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (89)
			Update: function () {
				Config.LowGold = 10000;
			}
		},
	21:	{
			SkillPoints: [102], 			// +1 Holy Fire (lvl 11)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (94)
			Update: function () {
			}
		},
	22:	{
			SkillPoints: [102], 			// +1 Holy Fire (lvl 12)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (99)
			Update: function () {
			}
		},
	23:	{
			SkillPoints: [97], 				// +1 Smite (lvl 1)
			StatPoints: [3,0,0,0,0],		// +1 Vitality (100) +4 Strength (45)
			Update: function () {
			}
		},
	24:	{
			SkillPoints: [101], 			// +1 Holy Bolt (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (105)
			Update: function () {
			}
		},
	25:	{
			SkillPoints: [107, 102], 		// +1 Charge (lvl 1) +1 Holy Fire (lvl 13) (Q1 Radament should be done here at least)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (110)
			Update: function () {
				Config.LowGold = 15000;
				Config.Charge = true;
				Config.MPBuffer = 6;
			}
		},
	26:	{
			SkillPoints: [111], 			// +1 Vengeance (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (115)
			Update: function () {
			}
		},
	27:	{
			SkillPoints: [103], 			// +1 Thorns (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (120)
			Update: function () {
			}
		},
	28:	{
			SkillPoints: [114], 			// +1 Holy Freeze (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (125)
			Update: function () {
			}
		},
	29:	{
			SkillPoints: [119], 			// +1 Sanctuary (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (130)
			Update: function () {
			}
		},
	30:	{
			SkillPoints: [123], 				// +1 Conviction (lvl 1)
			StatPoints: [0,0,0,0,0,0,0,0,0,0],	// +10 Strength (55) (Norm Lam Esen's Tome)
			Update: function () {
				Config.LowGold = 20000;
				Config.AttackSkill = [-1, 111, 123, 111, 123, -1, -1];		// Use Conviction Aura
				Config.LowManaSkill = [0, 123];								// Use Conviction Aura while hitting stuff.
			}
		},
	31:	{
			SkillPoints: [123, 112, 117], 	// +1 Conviction (lvl 2) +1 Blessed Hammer (lvl 1) +1 Holy Shield (lvl 1) (Q1 Izual should be done here at least)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (135)
			Update: function () {
			}
		},
	32:	{
			SkillPoints: [123],				// +1 Conviction (lvl 3)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (140)
			Update: function () {
			}
		},
	33:	{
			SkillPoints: [123],				// +1 Conviction (lvl 4)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (145)
			Update: function () {
			}
		},
	34:	{
			SkillPoints: [123],				// +1 Conviction (lvl 5)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (150)
			Update: function () {
			}
		},
	35:	{
			SkillPoints: [123],				// +1 Conviction (lvl 6)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (155)
			Update: function () {
				Config.LowGold = 30000;
			}
		},
	36:	{
			SkillPoints: [123],				// +1 Conviction (lvl 7)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (160)
			Update: function () {
			}
		},
	37:	{
			SkillPoints: [123],				// +1 Conviction (lvl 8)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (165)
			Update: function () {
			}
		},
	38:	{
			SkillPoints: [123],				// +1 Conviction (lvl 9)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (170)
			Update: function () {
			}
		},
	39:	{
			SkillPoints: [123],				// +1 Conviction (lvl 10)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (175)
			Update: function () {
			}
		},
	40:	{
			SkillPoints: [123],				// +1 Conviction (lvl 11)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (180)
			Update: function () {
				Config.LowGold = 35000;
			}
		},
	41:	{
			SkillPoints: [123],				// +1 Conviction (lvl 12)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (185)
			Update: function () {
			}
		},
	42:	{
			SkillPoints: [123],				// +1 Conviction (lvl 13)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (190)
			Update: function () {
			}
		},
	43:	{
			SkillPoints: [123],				// +1 Conviction (lvl 14)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (195)
			Update: function () {
			}
		},
	44:	{
			SkillPoints: [123],				// +1 Conviction (lvl 15)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (200)
			Update: function () {
			}
		},
	45:	{
			SkillPoints: [123],				// +1 Conviction (lvl 16)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (205)
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