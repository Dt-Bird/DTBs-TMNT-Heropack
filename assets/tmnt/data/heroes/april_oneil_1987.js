function init(hero) {
    hero.setName("April O'Neil");
    hero.setVersion("1987");
    hero.setTier(1);
    
    hero.setHelmet("item.superhero_armor.piece.head");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");
    hero.addPrimaryEquipment("fisktag:weapon{WeaponType:tmnt:pdw_lx}", true);

    hero.addPowers("tmnt:plot_armor");

    hero.addKeyBind("AIM", "key.aim", -1);
    hero.addKeyBind("GUN_RELOAD", "key.reload", 1);
    hero.addKeyBind("SHIELD", "Plot Armor", 4);

    hero.setHasPermission(hasPermission);
	hero.supplyFunction("canAim", canAim);
    hero.setKeyBindEnabled(isKeyBindEnabled);
	
	hero.setDefaultScale(0.94);
}

function hasPermission(entity, permission) {
    return permission == "USE_FISKTAG_GUN" || permission == "USE_GUN";
}

function canAim(entity) {
    return entity.getHeldItem().isLaserGun() || entity.getHeldItem().isGun();
}

function getAttributeProfile(entity) {
    return entity.getData("fiskheroes:shield_blocking") ? "SHIELD" : null;
}

function isKeyBindEnabled(entity, keyBind) {
    switch (keyBind) {
    case "GUN_RELOAD":
        return entity.getHeldItem().isGun();
    default:
        return true;
    }
}
