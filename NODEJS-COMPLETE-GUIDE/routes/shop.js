const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/", shopController.getIndex);
// join은 마지막에 경로를 출력함. 그리고 여러 세그먼트를 이어 붙여서 이 경로를 구축함
// __dirname은 운영체제의 절대 경로를 이 프로젝트 폴더로 고정해주는 전역 변수임
// 현재 routes 폴더이기 때문에 옆 폴더로 이동하기 위해서 ../

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProduct);

router.get("/cart", isAuth, shopController.getCart);

router.post("/cart", isAuth, shopController.postCart);

router.post("/cart-delete-item", isAuth, shopController.postCartDeleteProduct);

router.get("/checkout", isAuth, shopController.getCheckout);

router.get("/checkout/success", shopController.getCheckoutSuccess);

router.get("/checkout/cancel", shopController.getCheckout);

router.get("/orders", isAuth, shopController.getOrders);

router.get("/orders/:orderId", isAuth, shopController.getInvoice);

// router.get("/checkout", shopController.getCheckout);

module.exports = router;
