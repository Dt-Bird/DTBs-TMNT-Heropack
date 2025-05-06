function init(hero) {
    hero.setName("Foot Soldier");
    hero.setVersion("1987");
    hero.setTier(2);
    
    hero.setHelmet("item.superhero_armor.piece.mask");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");
	hero.addPrimaryEquipment("fisktag:weapon{WeaponType:tmnt:bo_staff}", true, item => item.nbt().getString("WeaponType") == "tmnt:bo_staff");
    hero.addPrimaryEquipment("fisktag:weapon{WeaponType:tmnt:sais,Dual:1}", true, item => item.nbt().getString("WeaponType") == "tmnt:sais" && item.nbt().getBoolean("Dual"));
    hero.addPrimaryEquipment("fisktag:weapon{WeaponType:tmnt:nunchucks_foot}", true, item => item.nbt().getString("WeaponType") == "tmnt:nunchucks_foot");
	hero.addPrimaryEquipment("fiskheroes:scimitar", true);
	hero.addPrimaryEquipment("fiskheroes:chokuto", true);
	hero.addPrimaryEquipment("fiskheroes:tactical_tonfa", true);
	
	hero.addPowers("tmnt:ninja_programming");
	hero.addAttribute("PUNCH_DAMAGE", 3.0, 0);
    hero.addAttribute("WEAPON_DAMAGE", 2.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 2.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 0.45, 1);
    hero.addAttribute("SPRINT_SPEED", 0.35, 1);

    hero.addKeyBind("AIM", "key.aim", -1);
    hero.addKeyBind("GUN_RELOAD", "key.reload", 1);
    hero.addKeyBind("UTILITY_BELT", "key.utilityBelt", 1);

    hero.setHasPermission(hasPermission);
	hero.supplyFunction("canAim", canAim);
    hero.setKeyBindEnabled(isKeyBindEnabled);
	
	hero.setDefaultScale(0.9732);
}

function hasPermission(entity, permission) {
    return permission == "USE_FISKTAG_GUN" || permission == "USE_GUN";
}

function canAim(entity) {
    return entity.getHeldItem().isLaserGun() || entity.getHeldItem().isGun();
}

function isKeyBindEnabled(entity, keyBind) {
    switch (keyBind) {
    case "GUN_RELOAD":
        return entity.getHeldItem().isGun();
    case "UTILITY_BELT":
        return !entity.getHeldItem().isGun();
    default:
        return true;
    }
}