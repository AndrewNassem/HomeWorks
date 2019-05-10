/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author iradukundajado
 */
public class BeerBrand {

    public static List getBrands(String brand) {
        List brands = new ArrayList();
        if (brand.equalsIgnoreCase("blue")) {
            brands.add("first");
            brands.add("second");
        } else {
            brands.add("third");
            brands.add("fourth");
        }
        return brands;
    }

}
