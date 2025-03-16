function init(hero) {
    hero.setName("Casey Jones");
    hero.setVersion("1987");
    hero.setTier(3);
    
    hero.setHelmet("item.superhero_armor.piece.mask");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");
	
    hero.addPrimaryEquipment("fisktag:weapon{WeaponType:tmnt:hockey_stick}", true, item => item.nbt().getString("WeaponType") == "tmnt:hockey_stick");
	hero.addPrimaryEquipment("fisktag:weapon{WeaponType:tmnt:golf_club}", true, item => item.nbt().getString("WeaponType") == "tmnt:golf_club");
	hero.addPrimaryEquipment("fisktag:weapon{WeaponType:tmnt:baseball_bat}", true, item => item.nbt().getString("WeaponType") == "tmnt:baseball_bat");
	hero.addPrimaryEquipment("fisktag:weapon{WeaponType:tmnt:sledgehammer}", true, item => item.nbt().getString("WeaponType") == "tmnt:sledgehammer");
	hero.addPrimaryEquipment("fiskheroes:grappling_gun", true);
	
	hero.setHasPermission((entity, permission) => permission == "USE_GUN" || permission == "USE_GRAPPLING_GUN");
	
	hero.addAttribute("PUNCH_DAMAGE", 3.5, 0);
    hero.addAttribute("WEAPON_DAMAGE", 3.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 3.5, 0);
    hero.addAttribute("SPRINT_SPEED", 0.1, 1);
	
	hero.setDefaultScale(0.9732);
}