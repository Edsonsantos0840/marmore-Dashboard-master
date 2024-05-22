// hokks
import { useEffect} from "react";
import { useState } from "react";

export default function UseHttp(url) {
  // states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [product, setProduct] = useState(null);
  const [comment, setComment] = useState([]);
  const [like, setLike] = useState(null);

  // função para buscar usuários
  useEffect(() => {
    setLoading(true);
    async function getUser() {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setUser(json);
      } catch (error) {
        setErr(error);
        console.log(error);
      }
    }
    setLoading(false);
    getUser();
  }, [setErr, setLoading, url]);

  // função para buscar produtos
  useEffect(() => {
    setLoading(true);
    async function getProduct() {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setProduct(json);
      } catch (error) {
        setErr(error);
        console.log(error);
      }
    }
    setLoading(false);
    getProduct();
  }, [setErr, setLoading, url]);

  // função para buscar comentários
  useEffect(() => {
    setLoading(true);
    async function getComment() {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setComment(json);
      } catch (error) {
        setErr(error);
        console.log(error);
      }
    }
    setLoading(false);
    getComment();
  }, [setErr, setLoading, url]);

  // função para buscar likes
  useEffect(() => {
    setLoading(true);
    async function getLike() {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setLike(json);
      } catch (error) {
        setErr(error);
        console.log(error);
      }
    }
    setLoading(false);
    getLike();
  }, [setErr, setLoading, url]);

  return { user, product, comment, like, loading, err };
}
