import { useEffect, useState } from "react";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc
} from "firebase/firestore";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// ...reszta z Canvasu, u Ciebie była prawidłowa
// (możesz też kliknąć „View App.jsx” w Canvasie i całość skopiować stamtąd)
