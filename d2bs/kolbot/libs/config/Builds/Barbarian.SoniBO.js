/** [SoniBO] Battle-Orders Beginner Barb Build (lvl 1 till 45 on norm)
*
* Instructions:	See /d2bs/kolbot/libs/config/Builds/README.txt
* Skill IDs:	See /d2bs/kolbot/sdk/skills.txt for a list of skill IDs.
*
Finished Char Build:
*
	Stats									Base Stats			Requirement
	------------							----------			-----------
 0 = Strength: 	60 (30 points used)				30				Enough for the most Equipment
 1 = Energy: 	10								10				
 2 = Dexterity: 35 (15 points used)				20				AR + Req. for Flail
 3 = Vitality: 	Rest 							25
*
	Skills					 Levelreq		  SkillID		  TotalPoints
	------------			 --------		  -------		  -----------
	Howl				  		1				130				1	- Done @ level 4
	Bash				    	1				126				1	- Done @ level 5
	Mace-Mastery				1				129				11	- Done @ level 22
	Shout				    	6				138				1	- Done @ level 7
	Leap				    	6				132				1	- Done @ level 17
	Double-Swing				6				133				6	- Done @ level 11
	Increased Stamina	   		12				141				1	- Done @ level 44
	Iron Skin 			   		18				145				1	- Done @ level 25
	Leap-Attack					18				143				1	- Done @ level 18
	Battle Orders		   		24				149				20	- Done @ level 43
	Increased Speed		   		24				148				1	- Done @ level 45
	Battle Command		   		30				155				1	- Done @ level 30
	Natural Resistance	   		30				153				2	- Done @ level 31
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
				Config.AttackSkill		= [0, 0, 0, 0, 0];
				Config.LowManaSkill		= [0];
				Config.HPBuffer = 4;
				Config.MPBuffer = 2;
				Config.RejuvBuffer = 2;
				Config.LogExperience	= true; 						// Print experience statistics in the manager.
				Config.ScanShrines		= [15, 13, 12, 14, 7, 6, 3, 2, 1];
				Config.BeltColumn		= ["hp", "hp", "hp", "hp"];		// Keep tons of health potions!
				Config.MinColumn 		= [1, 1, 1, 1];
				Config.OpenChests = false;
				Config.Cubing = false;									// Don't cube yet!
			}
		},
	2:	{
			SkillPoints: [129],				// +1 Mace-Mastery (lvl 1)
			StatPoints: [2,2,2,2,2],		// +5 Dexterity (25)
			Update: function () {
			}
		},
	3:	{
			SkillPoints: [129],				// +1 Mace-Mastery (lvl 2)
			StatPoints: [2,2,2,2,2],		// +5 Dexterity (30)
			Update: function () {
			}
		},
	4:	{
			SkillPoints: [130],				// +1 Howl (lvl 1)
			StatPoints: [2,2,2,2,2],		// +5 Dexterity (35)
			Update: function () {
			}
		},
	5:	{
			SkillPoints: [126],				// +1 Bash (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (30)
			Update: function () {
				Config.BeltColumn = ["hp", "hp", "hp", "mp"]; 			// Start keeping mp
				Config.MinColumn = [2,2,2,2];
			}
		},
	6:	{
			SkillPoints: [133],				// +1 Double-Swing (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (35)
			Update: function () {
				Config.AttackSkill		= [0, 133, 0, 133, 0];
			}
		},
	7:	{
			SkillPoints: [133, 138],		// +1 Double-Swing (lvl 2) +1 Shout (lvl 1) (Q1 Den should be done here at least)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (40) 
			Update: function () {
				//Config.PickitFiles.splice(Config.PickitFiles.indexOf("belowlevelseven.nip"), 1);	// Will remove index "belowlevel7.nip" from Config.PickitFiles
			}
		},
	8:	{
			SkillPoints: [133], 			// +1 Double-Swing (lvl 3)
			StatPoints: [0,0,0,0,0],		// +5 Strength (35)
			Update: function () {
			}
		},
	9:	{
			SkillPoints: [133], 			// +1 Double-Swing (lvl 4)
			StatPoints: [0,0,0,0,0],		// +5 Strength (40)
			Update: function () {
			}
		},
	10:	{
			SkillPoints: [133], 			// +1 Double-Swing (lvl 5)
			StatPoints: [0,0,0,0,0],		// +5 Strength (45)
			Update: function () {
				Config.LowGold = 5000;
				Config.TownCheck = true;	// Do go to town for more potions
			}
		},
	11:	{
			SkillPoints: [133], 			// +1 Double-Swing (lvl 6)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (45)
			Update: function () {
			}
		},
	12:	{
			SkillPoints: [129],				// +1 Mace-Mastery (lvl 3)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (50)
			Update: function () {
			}
		},
	13:	{
			SkillPoints: [129],				// +1 Mace-Mastery (lvl 4)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (55)
			Update: function () {
			}
		},
	14:	{
			SkillPoints: [129],				// +1 Mace-Mastery (lvl 5)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (60)
			Update: function () {
			}
		},
	15:	{
			SkillPoints: [129],				// +1 Mace-Mastery (lvl 6)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (65)
			Update: function () {
			}
		},
	16:	{
			SkillPoints: [129],				// +1 Mace-Mastery (lvl 7)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (70)
			Update: function () {
			}
		},
	17:	{
			SkillPoints: [132], 			// +1 Leap (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (75)
			Update: function () {
			}
		},
	18:	{
			SkillPoints: [143], 			// +1 Leap-Attack (lvl 1)
			StatPoints: [0,0,0,0,0],		// +5 Strength (50)
			Update: function () {
			}
		},
	19:	{
			SkillPoints: [129],				// +1 Mace-Mastery (lvl 8)
			StatPoints: [0,0,0,0,0],		// +5 Strength (55)
			Update: function () {
				Config.Cubing = true;																	// At least you should have a cube now
				Config.MakeRunewords = true;
			}
		},
	20:	{
			SkillPoints: [129],				// +1 Mace-Mastery (lvl 9)
			StatPoints: [0,0,0,0,0],		// +5 Strength (60)
			Update: function () {
				Config.LowGold = 10000;
			}
		},
	21:	{
			SkillPoints: [129],				// +1 Mace-Mastery (lvl 10)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (80)
			Update: function () {
			}
		},
	22:	{
			SkillPoints: [129],				// +1 Mace-Mastery (lvl 11)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (85)
			Update: function () {
			}
		},
	23:	{
			SkillPoints: [145],				// +1 Iron Skin (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (90)
			Update: function () {
			}
		},
	24:	{
			SkillPoints: [149], 			// +1 BO (lvl 1) (1 saved remains)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (95)
			Update: function () {
			}
		},
	25:	{
			SkillPoints: [149, -1], 		// +1 BO (lvl 2) + Save 1 Point (Q1 Radament should be done here at least)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (100)
			Update: function () {
				Config.LowGold = 15000;
			}
		},
	26:	{
			SkillPoints: [149], 			// +1 BO (lvl 3) (1 saved remains)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (105)
			Update: function () {
			}
		},
	27:	{
			SkillPoints: [149], 			// +1 BO (lvl 4) (1 saved remains)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (110)
			Update: function () {
			}
		},
	28:	{
			SkillPoints: [149], 			// +1 BO (lvl 5) (1 saved remains)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (115)
			Update: function () {
			}
		},
	29:	{
			SkillPoints: [149], 			// +1 BO (lvl 6) (1 saved remains)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (120)
			Update: function () {
			}
		},
	30:	{
			SkillPoints: [149, 155], 				// +1 BO (lvl 7) +1 Battle Command (lvl 1) (0 saved remains)
			StatPoints: [3,3,3,3,3,3,3,3,3,3],		// +10 Vitality (130) (Norm Lam Esen's Tome)
			Update: function () {
				Config.LowGold = 20000;
				Config.AttackSkill = [0, 155, 133, 149, 138, 133];		//155=Battle Command, 133=Double-Swing, 149=BO, 138=Shout
			}
		},
	31:	{
			SkillPoints: [149, 153, 153], 	// +1 BO (lvl 8) +2 Natural Resistance (lvl 2) (Q1 Izual should be done here at least)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (135)
			Update: function () {
			}
		},
	32:	{
			SkillPoints: [149], 			// +1 BO (lvl 9)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (140)
			Update: function () {
			}
		},
	33:	{
			SkillPoints: [149], 			// +1 BO (lvl 10)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (145)
			Update: function () {
			}
		},
	34:	{
			SkillPoints: [149], 			// +1 BO (lvl 11)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (150)
			Update: function () {
			}
		},
	35:	{
			SkillPoints: [149], 			// +1 BO (lvl 12)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (155)
			Update: function () {
				Config.LowGold = 30000;
				Config.AttackSkill = [155, 132, 133, 149, 138, 133];		//155=Battle Command, 132=Leap, 133=Double-Swing, 149=BO, 138=Shout
			}
		},
	36:	{
			SkillPoints: [149], 			// +1 BO (lvl 13)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (160)
			Update: function () {
			}
		},
	37:	{
			SkillPoints: [149], 			// +1 BO (lvl 14)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (165)
			Update: function () {
			}
		},
	38:	{
			SkillPoints: [149], 			// +1 BO (lvl 15)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (170)
			Update: function () {
			}
		},
	39:	{
			SkillPoints: [149], 			// +1 BO (lvl 16)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (175)
			Update: function () {
			}
		},
	40:	{
			SkillPoints: [149], 			// +1 BO (lvl 17)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (180)
			Update: function () {
				Config.LowGold = 35000;
			}
		},
	41:	{
			SkillPoints: [149], 			// +1 BO (lvl 18)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (185)
			Update: function () {
			}
		},
	42:	{
			SkillPoints: [149], 			// +1 BO (lvl 19)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (190)
			Update: function () {
			}
		},
	43:	{
			SkillPoints: [149], 			// +1 BO (lvl 20)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (195)
			Update: function () {
			}
		},
	44:	{
			SkillPoints: [141], 			// +1 Increased Stamina (lvl 1)
			StatPoints: [3,3,3,3,3],		// +5 Vitality (200)
			Update: function () {
			}
		},
	45:	{
			SkillPoints: [148], 			// +1 Increased Speed (lvl 1)
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