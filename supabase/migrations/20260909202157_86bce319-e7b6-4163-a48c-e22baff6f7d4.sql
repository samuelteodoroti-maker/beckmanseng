CREATE POLICY "Public can read video files" ON storage.objects
FOR SELECT USING (bucket_id IN ('videos','video-covers'));

CREATE POLICY "Admins can upload video files" ON storage.objects
FOR INSERT TO authenticated WITH CHECK (bucket_id IN ('videos','video-covers') AND public.has_role(auth.uid(),'admin'));

CREATE POLICY "Admins can update video files" ON storage.objects
FOR UPDATE TO authenticated USING (bucket_id IN ('videos','video-covers') AND public.has_role(auth.uid(),'admin'));

CREATE POLICY "Admins can delete video files" ON storage.objects
FOR DELETE TO authenticated USING (bucket_id IN ('videos','video-covers') AND public.has_role(auth.uid(),'admin'));