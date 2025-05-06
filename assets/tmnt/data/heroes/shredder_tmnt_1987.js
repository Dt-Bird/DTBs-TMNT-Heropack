function init(hero) {
    hero.setName("Shredder");
    hero.setVersion("1987");
    hero.setTier(7);
    
    hero.setHelmet("Helmet");
    hero.setChestplate("Chestplate");
    hero.setLeggings("Leggings");
    hero.setBoots("Boots");
	hero.addPrimaryEquipment("fiskheroes:katana", true);
    
	hero.addPowers("tmnt:shredder_armor");
	hero.addAttribute("PUNCH_DAMAGE", 7.5, 0);
    hero.addAttribute("WEAPON_DAMAGE", 4.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 2.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 0.45, 1);
    hero.addAttribute("SPRINT_SPEED", 0.45, 1);
	
	hero.addKeyBind("UTILITY_BELT", "key.utilityBelt", 1);
	hero.addKeyBind("BLADE", "Toggle Steel Claws", 2);
    hero.addKeyBind("TELEPORT", "key.teleport", 3);
    hero.addKeyBind("SHIELD", "Shield", 4);
    hero.addKeyBind("AIM", "key.aim", -1);
    hero.addKeyBind("GUN_RELOAD", "key.reload", 1);
	
	hero.addAttributeProfile("BLADE", bladeProfile);
	hero.setAttributeProfile(getProfile);
	hero.setDamageProfile(getProfile);
    hero.addDamageProfile("BLADE", {"types": {"SHARP": 1.0}});

    hero.setHasPermission(hasPermission);
	hero.supplyFunction("canAim", canAim);
    hero.setKeyBindEnabled(isKeyBindEnabled);
}

function hasPermission(entity, permission) {
    return permission == "USE_FISKTAG_GUN" || permission == "USE_GUN";
}

function canAim(entity) {
    return entity.getHeldItem().isLaserGun() || entity.getHeldItem().isGun();
}

function bladeProfile(profile) {
    profile.inheritDefaults();
    profile.addAttribute("PUNCH_DAMAGE", 7.5, 0);
}

function getAttributeProfile(entity) {
    return entity.getData("fiskheroes:shield_blocking") ? "SHIELD" : null;
}

function getProfile(entity) {
    return entity.getData("fiskheroes:blade") ? "BLADE" : null;
}

function isKeyBindEnabled(entity, keyBind) {  
	switch (keyBind) {
	case "BLADE":
        return entity.getHeldItem().isEmpty() && !entity.getData("fiskheroes:blade");
    case "GUN_RELOAD":
        return entity.getHeldItem().isGun();
    case "UTILITY_BELT":
        return !entity.getHeldItem().isGun();
    default:
        return true;
    }
}