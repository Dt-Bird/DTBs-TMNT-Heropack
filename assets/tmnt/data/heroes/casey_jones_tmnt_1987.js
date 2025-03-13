function init(hero) {
    hero.setName("Casey Jones");
    hero.setVersion("1987");
    hero.setTier(1);
    
    hero.setHelmet("item.superhero_armor.piece.mask");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");
	
    hero.addPrimaryEquipment("fisktag:weapon{WeaponType:tmnt:hockey_stick}", true, item => item.nbt().getString("WeaponType") == "tmnt:hockey_stick");
	hero.addPrimaryEquipment("fisktag:weapon{WeaponType:tmnt:golf_club}", true, item => item.nbt().getString("WeaponType") == "tmnt:golf_club");
	hero.addPrimaryEquipment("fisktag:weapon{WeaponType:tmnt:baseball_bat}", true, item => item.nbt().getString("WeaponType") == "tmnt:baseball_bat");
	hero.addPrimaryEquipment("fisktag:weapon{WeaponType:tmnt:sledgehammer}", true, item => item.nbt().getString("WeaponType") == "tmnt:sledgehammer");
	
	hero.setDefaultScale(0.9732);
}
