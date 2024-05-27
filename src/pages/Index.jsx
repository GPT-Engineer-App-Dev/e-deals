import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link, HStack, IconButton, Input, InputGroup, InputRightElement, Select, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [brand, setBrand] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Implement the search functionality here
  };

  const handleFilter = () => {
    console.log("Filtering products with:", { category, priceRange, brand });
    // Implement the filtering logic here
  };

  const products = [
    { id: 1, name: "Product 1", price: 299.99, category: "laptops", brand: "brandA", image: "/images/product1.jpg" },
    { id: 2, name: "Product 2", price: 199.99, category: "smartphones", brand: "brandB", image: "/images/product2.jpg" },
    { id: 3, name: "Product 3", price: 399.99, category: "accessories", brand: "brandC", image: "/images/product3.jpg" },
  ];

  const filteredProducts = products.filter(product => {
    return (
      (category ? product.category === category : true) &&
      (product.price >= priceRange[0] && product.price <= priceRange[1]) &&
      (brand ? product.brand === brand : true)
    );
  });

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
        </HStack>
        <InputGroup maxW="300px" ml={4}>
          <Input
            placeholder="Search for products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            bg="white"
            color="black"
          />
          <InputRightElement>
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              onClick={handleSearch}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="blue.700" color="white" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for all things electronics</Text>
        <Image src="/images/hero-product.jpg" alt="Featured Product" mx="auto" borderRadius="md" />
      </Box>

      {/* Filter Section */}
      <Box as="section" py={10}>
        <Heading size="lg" mb={4}>Filter Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={10}>
          <Box>
            <Text mb={2}>Category</Text>
            <Select placeholder="Select category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="laptops">Laptops</option>
              <option value="smartphones">Smartphones</option>
              <option value="accessories">Accessories</option>
            </Select>
          </Box>
          <Box>
            <Text mb={2}>Price Range</Text>
            <Slider
              aria-label="price-range"
              defaultValue={1000}
              min={0}
              max={1000}
              step={50}
              onChangeEnd={(val) => setPriceRange(val)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text mt={2}>${priceRange[0]} - ${priceRange[1]}</Text>
          </Box>
          <Box>
            <Text mb={2}>Brand</Text>
            <Select placeholder="Select brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
              <option value="brandA">Brand A</option>
              <option value="brandB">Brand B</option>
              <option value="brandC">Brand C</option>
            </Select>
          </Box>
        </SimpleGrid>
        <Button onClick={handleFilter}>Apply Filters</Button>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={10}>
        <Heading size="xl" textAlign="center" mb={10}>Our Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {filteredProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading size="md" mb={2}>{product.name}</Heading>
                <Text>${product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={10}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box>
              <Heading size="md" mb={4}>ElectroShop</Heading>
              <Text>© 2023 ElectroShop. All rights reserved.</Text>
            </Box>
            <Box>
              <Heading size="md" mb={4}>Contact Us</Heading>
              <Text>Email: support@electroshop.com</Text>
              <Text>Phone: (123) 456-7890</Text>
            </Box>
            <Box>
              <Heading size="md" mb={4}>Follow Us</Heading>
              <HStack spacing={4}>
                <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
                <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
                <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
              </HStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;