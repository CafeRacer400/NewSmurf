/**
 *	@filename	UserAddon.js
 *	@author		kolton
 *	@desc		Allows you to see more information about items, NPCs and players by placing the cursor over them.
 *				Shows item level, items in sockets, classid, code and magic item prefix/suffix numbers.
 *				Shows monster's classid, HP percent and resistances.
 *				Shows other players' gear.
 */
function UserAddon() {
    var activeAction, block, resfix,
        i, unit, title, dummy, keydown, grabber,
        classes = ["Amazon", "Sorceress", "Necromancer", "Paladin", "Barbarian", "Druid", "Assassin"],
        flags = [0x1, 0x2, 0x3, 0x4, 0x5, 0xf, 0x18, 0x19, 0xc, 0x9],
        resolution = me.screensize,
        info = new UnitInfo(),
		hide = false,
		list = true,
        hooks = [],
        decor = [],
        box = [];

    this.keyEvent = function(key) {
        switch (key) {
            case 32:
                FileTools.copy("libs/config/" + classes[me.classid] + ".js", "libs/config/" + classes[me.classid] + "." + me.name + ".js");
                D2Bot.printToConsole("libs/config/" + classes[me.classid] + "." + me.name + ".js has been created.");
                D2Bot.printToConsole("Please configure your bot and start it again.");
                D2Bot.stop();

                break;
        }
    };

    if (!Config.FastPick) { // Make sure the item event is loaded
        addEventListener("itemaction", this.itemEvent);
    }

    if (!FileTools.exists("libs/config/" + classes[me.classid] + "." + me.name + ".js")) {
        showConsole();
        print("ÿc4UserAddonÿc0: Press HOME and then press SPACE if you want to create character config.");
        addEventListener("keyup", this.keyEvent);
    }

    function UnitInfo() {
        this.x = 684;
        this.y = 127;
        this.hooks = [];
        this.cleared = true;

        this.createInfo = function(unit) {
            if (typeof unit === "undefined") {
                this.remove();

                return;
            }

            switch (unit.type) {
                case 0:
                    this.playerInfo(unit);

                    break;
                case 1:
                    this.monsterInfo(unit);

                    break;
                case 4:
                    this.itemInfo(unit);

                    break;
            }
        };

        this.playerInfo = function(unit) {
            var i, items, string,
                frameXsize = 20,
                frameYsize = 20,
                quality = ["ÿc0", "ÿc0", "ÿc0", "ÿc0", "ÿc3", "ÿc2", "ÿc9", "ÿc4", "ÿc8"];

            if (!this.currentGid) {
                this.currentGid = unit.gid;
            }

            if (this.currentGid === unit.gid && !this.cleared) {
                return;
            }

            if (this.currentGid !== unit.gid) {
                this.remove();
                this.currentGid = unit.gid;
            }

            this.hooks.push(new Text("ÿc0" + unit.name + " (" + unit.charlvl + " " + classes[unit.classid] + ")", this.x, this.y, 4, 13, 2));
            items = unit.getItems();

            if (items) {
                this.hooks.push(new Text("Equipped items:", this.x, this.y + 15, 4, 13, 2));
                frameYsize += 15;

                for (i = 0; i < items.length; i += 1) {
                    if (items[i].getFlag(0x4000000)) {
                        string = items[i].fname.split("\n")[1] + "ÿc0 " + items[i].fname.split("\n")[0];
                    } else {
                        string = quality[items[i].quality] + (items[i].quality > 4 && items[i].getFlag(0x10) ? items[i].fname.split("\n").reverse()[0].replace("ÿc4", "") : items[i].name);
                    }

                    this.hooks.push(new Text(string, this.x, this.y + (i + 2) * 15, 0, 13, 2));

                    if (string.length > frameXsize) {
                        frameXsize = string.length;
                    }

                    frameYsize += 15;
                }
            }

            frameXsize = 30; // always same size, delete if needed

            frameYsize += 145;

            this.hooks.push(new Text("FR: ÿc1" + (unit.getStat(39) - 30) + " / " + (unit.getStat(40) + 75), this.x, this.y + (i + 2) * 15 + 10, 4, 13, 2));
            this.hooks.push(new Text("CR: ÿc3" + (unit.getStat(43) - 30) + " / " + (unit.getStat(44) + 75), this.x, this.y + (i + 2) * 15 + 25, 4, 13, 2));
            this.hooks.push(new Text("LR: ÿc9" + (unit.getStat(41) - 30) + " / " + (unit.getStat(42) + 75), this.x, this.y + (i + 2) * 15 + 40, 4, 13, 2));
            this.hooks.push(new Text("PR: ÿc2" + (unit.getStat(45) - 30) + " / " + (unit.getStat(46) + 75), this.x, this.y + (i + 2) * 15 + 55, 4, 13, 2));
            this.hooks.push(new Text("PhyR: ÿc0" + unit.getStat(36), this.x, this.y + (i + 2) * 15 + 70, 4, 13, 2));

            //Sorb
            this.hooks.push(new Text("FAbs: ÿc1" + unit.getStat(142), this.x, this.y + (i + 2) * 15 + 85, 4, 13, 2));
            this.hooks.push(new Text("CAbs: ÿc3" + unit.getStat(148), this.x, this.y + (i + 2) * 15 + 100, 4, 13, 2));
            this.hooks.push(new Text("LAbs: ÿc9" + unit.getStat(144), this.x, this.y + (i + 2) * 15 + 115, 4, 13, 2));

            this.hooks.push(new Text("FCR: ÿc0" + unit.getStat(105), this.x, this.y + (i + 2) * 15 + 130, 4, 13, 2));

            this.cleared = false;
            this.hooks.push(new Box(this.x + 2, this.y - 15, Math.round(frameXsize * 7.5) - 4, frameYsize, 0x0, 1, 2));
            this.hooks.push(new Frame(this.x, this.y - 15, Math.round(frameXsize * 7.5), frameYsize, 2));

            this.hooks[this.hooks.length - 2].zorder = 0;
        };

        this.monsterInfo = function(unit) {
            var frameYsize = 125;

            if (!this.currentGid) {
                this.currentGid = unit.gid;
            }

            if (this.currentGid === unit.gid && !this.cleared) {
                return;
            }
            if (this.currentGid !== unit.gid) {
                this.remove();
                this.currentGid = unit.gid;
            }

            this.hooks.push(new Text("Class: ÿc0" + unit.classid, this.x, this.y, 4, 13, 2));
            this.hooks.push(new Text("HP pc: ÿc0" + Math.round(unit.hp * 100 / 128), this.x, this.y + 15, 4, 13, 2));
            this.hooks.push(new Text("FR: ÿc0" + unit.getStat(39), this.x, this.y + 30, 4, 13, 2));
            this.hooks.push(new Text("CR: ÿc0" + unit.getStat(43), this.x, this.y + 45, 4, 13, 2));
            this.hooks.push(new Text("LR: ÿc0" + unit.getStat(41), this.x, this.y + 60, 4, 13, 2));
            this.hooks.push(new Text("PR: ÿc0" + unit.getStat(45), this.x, this.y + 75, 4, 13, 2));
            this.hooks.push(new Text("PhyR: ÿc0" + unit.getStat(36), this.x, this.y + 90, 4, 13, 2));
            this.hooks.push(new Text("MagR: ÿc0" + unit.getStat(37), this.x, this.y + 105, 4, 13, 2));

            this.cleared = false;

            this.hooks.push(new Box(this.x + 2, this.y - 15, 136 + 85, frameYsize, 0x0, 1, 2));
            this.hooks.push(new Frame(this.x, this.y - 15, 140 + 85, frameYsize, 2));

            this.hooks[this.hooks.length - 2].zorder = 0;
        };
        this.itemInfo = function(unit) {
            var i = 0,
                frameYsize = 50;

            if (!this.currentGid) {
                this.currentGid = unit.gid;
            }

            if (this.currentGid === unit.gid && !this.cleared) {
                return;
            }

            if (this.currentGid !== unit.gid) {
                this.remove();
                this.currentGid = unit.gid;
            }

            this.hooks.push(new Text("Class: ÿc0" + unit.classid, this.x, this.y, 4, 13, 2));
            this.hooks.push(new Text("Code: ÿc0" + unit.code, this.x, this.y + 15, 4, 13, 2));
            this.hooks.push(new Text("iLvl: ÿc0" + unit.ilvl, this.x, this.y + 30, 4, 13, 2));

            this.cleared = false;
            this.socketedItems = unit.getItems();
            if (this.socketedItems[0]) {
                this.hooks.push(new Text("Sox with:", this.x, this.y + 45, 4, 13, 2));
                frameYsize += 15;

                for (i = 0; i < this.socketedItems.length; i += 1) {
                    this.hooks.push(new Text(this.socketedItems[i].fname.split("\n").reverse().join(" "), this.x, this.y + (i + 4) * 15, 0, 13, 2));
                    frameYsize += 15;
                }
            }
            // Get prefix and suffix from identified magic items
            if (unit.quality === 4 && unit.getFlag(0x10)) {
                this.hooks.push(new Text("Pre: ÿc0" + unit.prefixnum, this.x, this.y + frameYsize - 5, 4, 13, 2));
                this.hooks.push(new Text("Suf: ÿc0" + unit.suffixnum, this.x, this.y + frameYsize + 10, 4, 13, 2));

                frameYsize += 30;
            }

            // Get prefixes and suffixes from rare items
            if (unit.quality === 6) {
                var prefixes = unit.prefixes;
                var n = 0;
                while (n < prefixes.length) {
                    this.hooks.push(new Text("Prefix: ÿc0" + prefixes[n], this.x, this.y + frameYsize - 5, 4, 13, 2));
                    frameYsize += 15;
                    n += 1
                }

                var suffixes = unit.suffixes;
                var n = 0;
                while (n < suffixes.length) {
                    this.hooks.push(new Text("Suffix: ÿc0" + suffixes[n], this.x, this.y + frameYsize - 5, 4, 13, 2));
                    frameYsize += 15;
                    n += 1
                }
                //this.hooks.push(new Text("Suffix: ÿc0" + unit.suffixes, this.x, this.y + frameYsize + 10, 4, 13, 2));
            }

            this.hooks.push(new Box(this.x + 2, this.y - 15, 116 + 105, frameYsize, 0x0, 1, 2));
            this.hooks.push(new Frame(this.x, this.y - 15, 120 + 105, frameYsize, 2));
            this.hooks[this.hooks.length - 2].zorder = 0;
        };

        this.remove = function() {
            while (this.hooks.length > 0) {
                this.hooks.shift().remove();
            }

            this.cleared = true;
        };
    }
	
    function hookHandler(click, x, y) {
        // Get the hook closest to the clicked location
        function sortHooks(h1, h2) {
            return Math.abs(h1.y - y) - Math.abs(h2.y - y);
        }

        // Left click
        if (click === 0) {
            // Sort hooks
            hooks.sort(sortHooks);

            // Don't start new action until the current one finishes
            if (activeAction && activeAction !== hooks[0].text) {
                return true;
            }

            // Toggle current action on/off
            activeAction = activeAction ? false : hooks[0].text;

            hooks[0].color = hooks[0].color === 4 ? 1 : 4;

            // Block click
            return true;
        }

        return false;
    }

    function showHooks() {

        resfix = me.screensize ? 0 : -120;

        if (hooks.length) {
            if (resolution != me.screensize || hide) {
                resolution = me.screensize;

                while (hooks.length) {
                    var kill = hooks.shift();
                    kill.remove();
                }

                while (decor.length) {
                    var kill = decor.shift();
                    kill.remove();
                }

                list = !list;

            } else {
                return false;
            }
        }

        if (list) {
            var commands = [
                "Show",
            ];
        } else {
            var commands = [
                "Toggle info",
				"Toggle PickIt",
                "Hide",
            ];
        }

        for (var i = commands.length; i; i--) {
            addHook(commands[i - 1]);
        }

        hide = false;

        return true;

    }

    function addHook(text) {
        //decor.push (new Frame (6, 466 - hooks.length * 19 + resfix + 7, 160, 16));

        if (text === "Show" || text === "Hide") {
            hooks.push(new Text(text, 5, 480 - hooks.length * 16 + resfix + 116, 2, 1, 0, false, hookHandler));
            decor.push(new Box(1, 466 - hooks.length * 16 + resfix + 116, 50, 16));
        } else {
            hooks.push(new Text(text, 9, 480 - hooks.length * 16 + resfix + 23, 4, 1, 0, false, hookHandler));
        }
    }
    load("tools/mapthread.js");

    while (true) {

        if (keydown) {
			//Pickit.fastPick();
            unit = getUnit(101);
            info.createInfo(unit);
            delay(20);
        }
		if (grabber) {
			Pickit.fastPick();
			delay(20);
		}
        switch (activeAction) {
            case "Toggle info":
                if (!keydown) {
                    me.overhead("     Info ÿc2ON");
                    keydown = true;
                } else {
                    me.overhead("     Info ÿc1OFF");
                    keydown = false;
                }
                activeAction = false;
                break;
				
			case "Toggle PickIt":
                if (!grabber) {
                    me.overhead("     PickIt ÿc2ON");
                    grabber = true;
                } else {
                    me.overhead("     PickIt ÿc1OFF");
                    grabber = false;
                }
                activeAction = false;
                break;

            case "Hide":
            case "Show":
                hide = true;
                activeAction = false;
                break;

            default:
                showHooks();

                for (var i = 0; i < hooks.length; i++) {
                    if (hooks[i].color === 1) {
                        hooks[i].color = 4;
                    }
                }

                break;
        }
		//Pickit.fastPick();
        delay(10);
    }
}