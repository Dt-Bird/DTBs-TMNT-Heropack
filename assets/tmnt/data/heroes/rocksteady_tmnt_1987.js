function init(hero) {
    hero.setName("Rocksteady");
    hero.setVersion("1987");
    hero.setTier(4);
    
    hero.setHelmet("item.superhero_armor.piece.head");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");
    hero.addPrimaryEquipment("fisktag:weapon{WeaponType:tmnt:pdw_lx}", true);
	
    hero.addPowers("fiskheroes:grenades");
	hero.addAttribute("PUNCH_DAMAGE", 8.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 0.45, 1);
    hero.addAttribute("SPRINT_SPEED", 0.45, 1);
	
    hero.addKeyBind("AIM", "key.aim", -1);
    hero.addKeyBind("GUN_RELOAD", "key.reload", 1);
    hero.addKeyBind("UTILITY_BELT", "key.grenades", 2);

    hero.setHasPermission(hasPermission);
	hero.supplyFunction("canAim", canAim);
    hero.setKeyBindEnabled(isKeyBindEnabled);

	hero.setDefaultScale(0.99);
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