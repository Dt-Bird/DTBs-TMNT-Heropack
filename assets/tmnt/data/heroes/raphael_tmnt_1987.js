function init(hero) {
    hero.setName("Raphael");
    hero.setVersion("1987");
    hero.setTier(4);
    
    hero.setHelmet("item.superhero_armor.piece.mask");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");
	hero.addPrimaryEquipment("fisktag:weapon{WeaponType:tmnt:raphaels_sai,Dual:1}", true, item => item.nbt().getString("WeaponType") == "tmnt:raphaels_sai" && item.nbt().getBoolean("Dual"));
	
	hero.addPowers("tmnt:mutant_ninja_skills");
	hero.addKeyBind("UTILITY_BELT", "key.utilityBelt", 1);
	
	hero.setDefaultScale(0.824324);
}
