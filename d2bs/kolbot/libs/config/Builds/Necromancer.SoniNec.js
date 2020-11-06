/** [SoniNec] Necro Build (lvl 1 till 45 on norm)
 *
 * Instructions:	See /d2bs/kolbot/libs/config/Builds/README.txt
 * Skill IDs:	See /d2bs/kolbot/sdk/skills.txt for a list of skill IDs.
 *
Finished Char Build:
 *
	Stats									Base Stats			Requirement
	------------							----------			-----------
	0 = Strength: 	45 (25 points used)			15				34 Large Shield || 43 Crystal Sword || 45 Long Sword Eth || 45 Magefist
	1 = Energy: 	35 (10 points used)			25				Mana :D
	2 = Dexterity: 25 (0 points used)			25
	3 = Vitality: 	Rest 						15
 *
	Skills					 Levelreq		  SkillID		  TotalPoints
	------------			 --------		  -------		  -----------
Curses ------------------------------------------------------------------------------
	Amplify Damage				1				66				1	- Done @ level 2
	Weaken						6				72				1	- Done @ level 22
	Terror						12				77				1	- Done @ level 23
	Decrepify					24				87				1	- Done @ level 24
	Lower Resist				30				91				1	- Done @ level 30
	Iron Maiden					12				76				1	- Done @ level 28
	Life Tap					18				82				1	- Done @ level 29
P'n'Bone ----------------------------------------------------------------------------
	Bone Armor					1				68				1	- Done @ level 3
	Teeth						1				67				1	- Done @ level 4
	Corpse Explosion			6				74				5	- Done @ level 42
	Bone Wall					12				78				1	- Done @ level 41
	Bone Spear					18				84				1	- Done @ level 43
	Bone Prison					24				88				1	- Done @ level 44
Summoning ---------------------------------------------------------------------------
	Skeleton Mastery			1				69				13	- Done @ level 45
	Raise Skeleton				1				70				15	- Done @ level 40
	Clay Golem					6				75				1	- Done @ level 7
	Golem Mastery				12				79				1	- Done @ level 12
	Summon Resist				24				89				1	- Done @ level 25
 */
js_strict(true);

if (!isIncluded("common/Cubing.js")) { include("common/Cubing.js"); };
if (!isIncluded("common/Prototypes.js")) { include("common/Prototypes.js"); };
if (!isIncluded("common/Runewords.js")) { include("common/Runewords.js"); };

var AutoBuildTemplate = {
	1: {
		//SkillPoints: [-1],										// This doesn't matter. We don't have skill points to spend at lvl 1]
		//StatPoints: [-1,-1,-1,-1,-1],								// This doesn't matter. We don't have stat points to spend at lvl 1
		Update: function () {
			Config.TownCheck = false; 								// Don't go to town for more potions
			Config.StashGold = 200; 								// Minimum amount of gold to stash.
			Config.AttackSkill = [-1, 0, 0, 0, 0, -1, -1];
			Config.LowManaSkill = [0, 0];
			Config.HPBuffer = 3;
			Config.MPBuffer = 5;
			Config.RejuvBuffer = 2;
			Config.LogExperience = true;
			Config.ScanShrines = [15, 13, 12, 14, 7, 6, 3, 2, 1];
			Config.BeltColumn = ["hp", "hp", "mp", "mp"]; 			// Keep tons of health potions!
			Config.MinColumn = [1, 1, 1, 1];
			Config.OpenChests = true; 								// Might as well open em.
			Config.Cubing = false; 									// Don't cube yet!
			Config.Golem = 0; 						// Golem. 0 or "None" = don't summon, 1 or "Clay" = Clay Golem, 2 or "Blood" = Blood Golem, 3 or "Fire" = Fire Golem
			Config.ExplodeCorpses = 0; 				// Explode corpses. Use skill number or 0 to disable. 74 = Corpse Explosion, 83 = Poison Explosion
			Config.Curse[0] = 0; 					// Boss curse. Use skill number or set to 0 to disable. (87=Decrepify 66=Amplify Damage)
			Config.Curse[1] = 0; 					// Other monsters curse. Use skill number or set to 0 to disable. (87=Decrepify 66=Amplify Damage)
			Config.Skeletons = "max"; 				// Number of skeletons to raise. Set to "max" to auto detect, set to 0 to disable.
			Config.SkeletonMages = 0; 				// Number of skeleton mages to raise. Set to "max" to auto detect, set to 0 to disable.
			Config.Revives = 0; 					// Number of revives to raise. Set to "max" to auto detect, set to 0 to disable.
			Config.ActiveSummon = true; 			// Raise dead between each attack. If false, it will raise after clearing a spot.
			Config.ReviveUnstackable = false; 		// Revive monsters that can move freely after you teleport.
		}
	},
	2: {
		SkillPoints: [66], 				// +1 Amplify Damage (lvl 1)
		StatPoints: [1, 1, 1, 1, 1], 	// +5 Energy (30)
		Update: function () {
			Config.Curse[0] = 66; 		// Boss curse. Use skill number or set to 0 to disable. (87=Decrepify 66=Amplify Damage)
			Config.Curse[1] = 0; 		// Other monsters curse. Use skill number or set to 0 to disable. (87=Decrepify 66=Amplify Damage)
		}
	},
	3: {
		SkillPoints: [68], 				// +1 Bone Armor (lvl 1)
		StatPoints: [1, 1, 1, 1, 1], 	// +5 Energy (35)
		Update: function () {
			Config.Dodge = true;
		}
	},
	4: {
		SkillPoints: [67], 				// +1 Teeth (lvl 1)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (20)
		Update: function () {
			Config.Dodge = true;
			Config.DodgeRange = 10;
			Config.AttackSkill = [-1, 67, -1, 67, -1, -1, -1];
		}
	},
	5: {
		SkillPoints: [70], 				// +1 Raise Skeleton (lvl 1)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (25)
		Update: function () {}
	},
	6: {
		SkillPoints: [74], 				// +1 Corpse Explosion (lvl 1)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (30)
		Update: function () {
			Config.ExplodeCorpses = 74; // Explode corpses. Use skill number or 0 to disable. 74 = Corpse Explosion, 83 = Poison Explosion
		}
	},
	7: {
		SkillPoints: [75, 69], 			// +1 Clay Golem (lvl 1), +1 Skeleton Mastery (lvl 1) (Q1 Den should be done here at least)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (35)
		Update: function () {
			Config.Golem = 1; 			// Golem. 0 or "None" = don't summon, 1 or "Clay" = Clay Golem, 2 or "Blood" = Blood Golem, 3 or "Fire" = Fire Golem
		}
	},
	8: {
		SkillPoints: [70], 				// +1 Raise Skeleton (lvl 2)
		StatPoints: [0, 0, 0, 0, 0], 	// +5 Strength (20)
		Update: function () {}
	},
	9: {
		SkillPoints: [69], 				// +1 Skeleton Mastery (lvl 2)
		StatPoints: [0, 0, 0, 0, 0], 	// +5 Strength (25)
		Update: function () {}
	},
	10: {
		SkillPoints: [70], 				// +1 Raise Skeleton (lvl 3)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (40)
		Update: function () {
			Config.StashGold = 1000; 	// Minimum amount of gold to stash.
			Config.LowGold = 5000;
			Config.TownCheck = true; 	// Go to town for more potions
		}
	},
	11: {
		SkillPoints: [69], 				// +1 Skeleton Mastery (lvl 3)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (45)
		Update: function () {}
	},
	12: {
		SkillPoints: [79], 				// +1 Golem Mastery (lvl 1)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (50)
		Update: function () {
			Config.MPBuffer = 7;
			Config.MinColumn = [2, 2, 2, 2];
			Config.HPBuffer = 4; 		// Number of healing potions to keep in inventory.
			Config.Curse[1] = 0; 		// Other monsters curse. Use skill number or set to 0 to disable.
		}
	},
	13: {
		SkillPoints: [70], 				// +1 Raise Skeleton (lvl 4)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (55)
		Update: function () {}
	},
	14: {
		SkillPoints: [69], 				// +1 Skeleton Mastery (lvl 4)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (60)
		Update: function () {}
	},
	15: {
		SkillPoints: [70], 				// +1 Raise Skeleton (lvl 5)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (65)
		Update: function () {
			Config.OpenChests = false; 	// Eyes on the prize!
		}
	},
	16: {
		SkillPoints: [69], 				// +1 Skeleton Mastery (lvl 5)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (70)
		Update: function () {}
	},
	17: {
		SkillPoints: [70], 				// +1 Raise Skeleton (lvl 6)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (75)
		Update: function () {
		}
	},
	18: {
		SkillPoints: [69], 				// +1 Skeleton Mastery (lvl 6)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (80)
		Update: function () {
			Config.MinColumn = [3, 3, 3, 3]; // Should have a decent belt by now
		}
	},
	19: {
		SkillPoints: [70], 				// +1 Raise Skeleton (lvl 7)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (85)
		Update: function () {
			Config.Cubing = true; 		// At least you should have a cube now
			Config.MakeRunewords = true;
		}
	},
	20: {
		SkillPoints: [70], 				// +1 Raise Skeleton (lvl 8)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (90)
		Update: function () {
			Config.LowGold = 10000;
		}
	},
	21: {
		SkillPoints: [70], 				// +1 Raise Skeleton (lvl 9)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (95)
		Update: function () {}
	},
	22: {
		SkillPoints: [72], 				// +1 Weaken (lvl 1)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (100)
		Update: function () {}
	},
	23: {
		SkillPoints: [77], 				// +1 Terror (lvl 1)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (105)
		Update: function () {}
	},
	24: {
		SkillPoints: [87], 				// +1 Decrepify (lvl 1)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (110)
		Update: function () {
			Config.Curse[0] = 87; 		// Boss curse. Use skill number or set to 0 to disable.
			Config.Curse[1] = 87; 		// Other monsters curse. Use skill number or set to 0 to disable.
		}
	},
	25: {
		SkillPoints: [89, 69], 			// +1 Summon Resist (lvl 1), +1 Skeleton Mastery (lvl 7) (Q1 Radament should be done here at least)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (115)
		Update: function () {
			Config.LowGold = 15000;
		}
	},
	26: {
		SkillPoints: [69], 				// +1 Skeleton Mastery (lvl 8)
		StatPoints: [0, 0, 0, 0, 0], 	// +5 Strength (30)
		Update: function () {}
	},
	27: {
		SkillPoints: [69], 				// +1 Skeleton Mastery (lvl 9)
		StatPoints: [0, 0, 0, 0, 0], 	// +5 Strength (35)
		Update: function () {}
	},

	28: {
		SkillPoints: [76], 				// +1 Iron Maiden (lvl 1)
		StatPoints: [0, 0, 0, 0, 0], 	// +5 Strength (40)
		Update: function () {}
	},

	29: {
		SkillPoints: [82], 				// +1 Life Tap (lvl 1)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (120)
		Update: function () {}
	},
	30: {
		SkillPoints: [91], 				// +1 Lower Resist (lvl 1)
		StatPoints: [3, 3, 3, 3, 3, 0, 0, 0, 0, 0], // +5 Vitality (125), +5 Strength (45) (Norm Lam Esen's Tome)
		Update: function () {
			Config.Curse[0] = 91; 		// Boss curse. Use skill number or set to 0 to disable.
			Config.Curse[1] = 91; 		// Other monsters curse. Use skill number or set to 0 to disable.
		}
	},
	31: {
		SkillPoints: [70, 69, 74], 		// +1 Raise Skeleton (lvl 10), +1 Skeleton Mastery (lvl 10), +1 Corpse Explosion (lvl 2) (Q1 Izual should be done here at least)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (130)
		Update: function () {}
	},
	32: {
		SkillPoints: [70], 				// +1 Raise Skeleton (lvl 11)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (135)
		Update: function () {}
	},
	33: {
		SkillPoints: [69], 				// +1 Skeleton Mastery (lvl 11)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (140)
		Update: function () {}
	},
	34: {
		SkillPoints: [70], 				// +1 Raise Skeleton (lvl 12)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (145)
		Update: function () {}
	},
	35: {
		SkillPoints: [69], 				// +1 Skeleton Mastery (lvl 12)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (150)
		Update: function () {
			Config.LowGold = 30000;
		}
	},
	36: {
		SkillPoints: [70], 				// +1 Raise Skeleton (lvl 13)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (155)
		Update: function () {}
	},
	37: {
		SkillPoints: [74], 				// +1 Corpse Explosion (lvl 3)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (160)
		Update: function () {}
	},
	38: {
		SkillPoints: [70], 				// +1 Raise Skeleton (lvl 14)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (165)
		Update: function () {}
	},
	39: {
		SkillPoints: [74], 				// +1 Corpse Explosion (lvl 4)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (170)
		Update: function () {}
	},
	40: {
		SkillPoints: [70], 				// +1 Raise Skeleton (lvl 15)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (175)
		Update: function () {
			Config.LowGold = 35000;
		}
	},
	41: {
		SkillPoints: [78], 				// +1 Bone Wall (lvl 1)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (180)
		Update: function () {}
	},
	42: {
		SkillPoints: [74], 				// +1 Corpse Explosion (lvl 5)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (185)
		Update: function () {}
	},
	43: {
		SkillPoints: [84], 				// +1 Bone Spear (lvl 1)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (190)
		Update: function () {}
	},
	44: {
		SkillPoints: [88], 				// +1 Bone Prison (lvl 1)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (195)
		Update: function () {}
	},
	45: {
		SkillPoints: [69], 				// +1 Skeleton Mastery (lvl 13)
		StatPoints: [3, 3, 3, 3, 3], 	// +5 Vitality (200)
		Update: function () {
			Config.LowGold = 40000;
		}
	},
	46: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	47: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	48: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	49: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	50: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	51: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	52: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	53: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	54: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	55: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	56: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	57: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	58: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	59: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	60: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	61: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	62: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	63: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	64: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	65: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	66: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	67: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	68: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	69: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	70: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	71: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	72: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	73: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	74: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	75: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	76: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	77: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	78: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	79: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	80: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	81: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	82: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	83: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	84: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	85: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	86: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	87: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	88: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	89: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	90: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	91: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	92: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	93: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	94: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	95: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	96: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	97: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	98: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	},
	99: {
		SkillPoints: [-1], // Save Skill Point
		StatPoints: [-1, -1, -1, -1, -1], // Save Stat Points
		Update: function () {}
	}
};
