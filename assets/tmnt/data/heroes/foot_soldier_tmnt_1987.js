function init(hero) {
    hero.setName("Foot Soldier");
    hero.setVersion("1987");
    hero.setTier(1);
    
    hero.setHelmet("item.superhero_armor.piece.mask");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");
	hero.addPrimaryEquipment("fisktag:weapon{WeaponType:tmnt:bo_staff}", true, item => item.nbt().getString("WeaponType") == "tmnt:bo_staff");
	hero.addPrimaryEquipment("fiskheroes:scimitar", true);
	hero.addPrimaryEquipment("fiskheroes:chokuto", true);
	hero.addPrimaryEquipment("fiskheroes:tactical_tonfa", true);
	
	hero.addPowers("tmnt:ninja_skills");
	hero.addKeyBind("UTILITY_BELT", "key.utilityBelt", 1);
	
	hero.setDefaultScale(0.9732);
}
