function init(hero) {
    hero.setName("Raphael");
    hero.setVersion("1987");
    hero.setTier(6);
    
    hero.setHelmet("item.superhero_armor.piece.mask");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("Legs");
    hero.setBoots("Feet");

	hero.addPrimaryEquipment("fisktag:weapon{WeaponType:tmnt:raphaels_sai,Dual:1}", true, item => item.nbt().getString("WeaponType") == "tmnt:raphaels_sai" && item.nbt().getBoolean("Dual"));
	
	hero.addPowers("tmnt:mutant_turtle_physiology", "tmnt:turtle_line", "tmnt:tmnt_plot_armor");
    
	hero.addAttribute("PUNCH_DAMAGE", 8.0, 0);
    hero.addAttribute("WEAPON_DAMAGE", 6.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 2.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 1, 1);
    hero.addAttribute("SPRINT_SPEED", 0.4, 1);

	hero.addKeyBind("UTILITY_BELT", "key.utilityBelt", 1);
    hero.addKeyBind("WEB_ZIP", "Turtle Line Zip", 2);
    hero.addKeyBindFunc("func_WEB_SWINGING", webSwingingKey, "Toggle Turtle Line", 3);
	hero.addKeyBind("SHIELD", "Turtle Power", 4);

	hero.setDefaultScale(0.824324);
}

function getAttributeProfile(entity) {
    return entity.getData("fiskheroes:shield_blocking") ? "SHIELD" : null;
}

function webSwingingKey(player, manager) {
    var flag = player.getData("fiskheroes:web_swinging");
    if (!flag) {
        manager.setDataWithNotify(player, "fiskheroes:prev_utility_belt_type", player.getData("fiskheroes:utility_belt_type"));
        manager.setDataWithNotify(player, "fiskheroes:utility_belt_type", -1);
    }
    manager.setDataWithNotify(player, "fiskheroes:web_swinging", !flag);
    return true;
}

function isModifierEnabled(entity, modifier) {
    switch (modifier.name()) {
    case "fiskheroes:web_swinging":
        return entity.getHeldItem().isEmpty();
    case "fiskheroes:web_zip":
        return entity.getHeldItem().isEmpty();  
    case "fiskheroes:leaping":
        return modifier.id() == "springboard" == (entity.getData("fiskheroes:ticks_since_swinging") < 5);
    default:
        return true;
    }
}